import { Body, Controller, Get, Post } from '@nestjs/common';
import { TableService } from "./table.service";
import { ColumnDto } from "./dto/column.dto";
import { ColumnEntity } from "./column.entity";
import { RowDto } from "./dto/row.dto";
import { RowEntity } from "./row.entity";
import { Role } from "../_constants/roles.constant";
import { Roles } from "../auth/decorate/auth.guard";

@Controller('table')
export class TableController {
  constructor(
    private tableService: TableService
  ) {
  }

  @Roles(Role.Admin)
  @Get('find-all')
  async findAllTable(): Promise<ColumnEntity[]> {
    return await this.tableService.findAll();
  }

  @Get('get-one')
  async getOneRow(): Promise<RowEntity> {
    return await this.tableService.getOneRow();
  }

  @Post('create-columns')
  async createColumn(@Body() col: ColumnDto): Promise<ColumnEntity> {
    return await this.tableService.createColumn(col);
  }

  @Post('create-rows')
  async createRow(@Body() row: RowDto): Promise<RowEntity> {
    return await this.tableService.createRow(row);
  }
}
