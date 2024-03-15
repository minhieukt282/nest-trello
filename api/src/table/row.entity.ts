import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { ColumnEntity } from "./column.entity";

@Entity()
export class RowEntity {
  @PrimaryGeneratedColumn()
  rowId: number;

  @Column()
  content: string;

  @Column()
  label: string;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne(() => ColumnEntity, (col) => col.rows)
  @JoinColumn({ name: 'columnId' })
  cols: ColumnEntity;
}
