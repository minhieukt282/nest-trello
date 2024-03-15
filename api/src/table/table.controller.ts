import { Body, Controller, Get, Post } from '@nestjs/common';
import { TableService } from "./table.service";
import { ColumnDto } from "./dto/column.dto";
import { ColumnEntity } from "./column.entity";
import { RowDto } from "./dto/row.dto";
import { RowEntity } from "./row.entity";

@Controller('table')
export class TableController {
  constructor(
    private tableService: TableService
  ) {
  }

  @Get('find-all')
  async findAllTable(): Promise<ColumnEntity[]> {
    return await this.tableService.findAll();
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
