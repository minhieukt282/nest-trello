import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ColumnEntity } from "../table/column.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  display_name: string;

  @OneToMany(() => ColumnEntity, (col) => col.user)
  cols: ColumnEntity[];
}
