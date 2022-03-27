import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Task } from '../entities';

@ObjectType()
export class PhasePayload {
  @Field(() => ID)
  id?: string;

  @Field(() => String)
  title: string;

  @Field(() => [Task])
  tasks?: Task[];

  @Field(() => Boolean)
  allTasksCompleted: boolean;

  @Field(() => Boolean)
  isDisabled: boolean;
}
