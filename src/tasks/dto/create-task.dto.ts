import { InputType, Field, ArgsType, ID } from '@nestjs/graphql';

@InputType()
class CreateTaskDto {
  @Field(() => ID)
  phaseId: string;

  @Field(() => String)
  text: string;
}

@ArgsType()
export class CreateTaskArgs {
  @Field()
  record: CreateTaskDto;
}
