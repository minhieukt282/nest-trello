import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ColumnEntity } from "./column.entity";
import { RowEntity } from "./row.entity";
import { ColumnDto } from "./dto/column.dto";
import { RowDto } from "./dto/row.dto";
import { UsersService } from "../users/users.service";

@Injectable()
export class TableService {
  constructor(
    @InjectRepository(ColumnEntity)
    private colRepository: Repository<ColumnEntity>,
    @InjectRepository(RowEntity)
    private rowRepository: Repository<RowEntity>,
    private usersService: UsersService
  ) {
  }

  async findAll(): Promise<ColumnEntity[]> {
    return await this.colRepository.find({
      relations: { rows: true }
    });
  }

  async findColumnById(colId: number): Promise<ColumnEntity> {
    return await this.colRepository.findOneBy({
      columnId: colId
    });
  }

  async createColumn(col: ColumnDto): Promise<ColumnEntity> {
    const user = await this.usersService.findUserById(col.userId);
    const newCol = new ColumnEntity();
    newCol.columnName = col.columnName;
    newCol.user = user;
    return await this.colRepository.save(newCol);
  }

  async createRow(row: RowDto): Promise<RowEntity> {
    const col = await this.findColumnById(row.columnId);
    const newRow = new RowEntity();
    newRow.content = row.content;
    newRow.label = row.label;
    newRow.cols = col;
    return await this.rowRepository.save(newRow);
  }

  async getOneRow() : Promise<RowEntity> {
    return await this.rowRepository.findOneBy({
      rowId: 1
    })
  }

}
