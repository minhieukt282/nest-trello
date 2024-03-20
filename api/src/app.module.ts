import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from "./users/users.entity";
import { TableModule } from './table/table.module';
import { RowEntity } from "./table/row.entity";
import { ColumnEntity } from "./table/column.entity";
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'trello_clone',
    entities: [User, RowEntity, ColumnEntity],
    synchronize: true,
  }),
    UsersModule,
    TableModule,
    AuthModule],
})
export class AppModule {
}
