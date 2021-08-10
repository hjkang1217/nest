import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
