import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Phase } from '.';

@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id?: string;

  @Column()
  @Field(() => String)
  text: string;

  @Column({ name: 'is_done', default: false })
  @Field(() => Boolean)
  isDone?: boolean;

  @ManyToOne(() => Phase, (phase) => phase.tasks)
  @JoinColumn({ name: 'phase_id', referencedColumnName: 'id' })
  @Field(() => Phase)
  phase: Phase;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  @Field(() => Date)
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  @Field(() => Date)
  updatedAt?: Date;
}
