import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';

@Entity()
@ObjectType()
export class Phase {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id?: string;

  @Column()
  @Field(() => String)
  title: string;

  @OneToMany(() => Task, (task) => task.phase, {
    eager: true,
    nullable: true,
  })
  @Field(() => [Task], { nullable: true })
  tasks?: Task[];
}
