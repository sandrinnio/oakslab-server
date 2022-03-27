import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTaskArgs, RemoveTaskArgs, UpdateTaskArgs } from './dto';
import { PhasePayload } from './payloads';
import { Task } from './entities';
import { TasksService } from './tasks.service';

@Resolver()
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => [PhasePayload])
  getPhasesTasks() {
    return this.tasksService.getPhasesTasks();
  }

  @Mutation(() => Task)
  createTask(@Args() createTaskArgs: CreateTaskArgs) {
    return this.tasksService.createTask(createTaskArgs);
  }

  @Mutation(() => Task)
  updateTask(@Args() updateTaskArgs: UpdateTaskArgs) {
    return this.tasksService.updateTask(updateTaskArgs);
  }

  @Mutation(() => String, { nullable: true })
  removeTask(@Args() removeTaskArgs: RemoveTaskArgs) {
    return this.tasksService.removeTask(removeTaskArgs);
  }
}
