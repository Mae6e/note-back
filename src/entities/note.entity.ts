import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn  } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @CreateDateColumn()
  created_at: Date;
}