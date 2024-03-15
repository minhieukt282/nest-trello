import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { RowEntity } from "./row.entity";
import { User } from "../users/users.entity";

@Entity()
export class ColumnEntity {
  @PrimaryGeneratedColumn()
  columnId: number;

  @Column()
  columnName: string;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(() => RowEntity, (row) => row.cols)
  rows: RowEntity[];

  @ManyToOne(() => User, (user) => user.cols)
  @JoinColumn({ name: 'userId' })
  user: User;
}
