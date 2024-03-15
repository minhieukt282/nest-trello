import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ColumnEntity } from "./column.entity";
import { RowEntity } from "./row.entity";
import { UsersService } from "../users/users.service";
import { User } from "../users/users.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ColumnEntity, RowEntity, User])],
  providers: [TableService, UsersService],
  controllers: [TableController]
})
export class TableModule {
}
