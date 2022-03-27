import { InputType, Field, ArgsType, ID } from '@nestjs/graphql';

@InputType()
class UpdateTaskDto {
  @Field(() => ID)
  id: string;

  @Field(() => Boolean)
  isDone: boolean;
}

@ArgsType()
export class UpdateTaskArgs {
  @Field()
  record: UpdateTaskDto;
}
