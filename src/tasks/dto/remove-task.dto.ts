import { InputType, Field, ArgsType, ID } from '@nestjs/graphql';

@InputType()
class RemoveTaskDto {
  @Field(() => ID)
  id: string;
}

@ArgsType()
export class RemoveTaskArgs {
  @Field()
  record: RemoveTaskDto;
}
