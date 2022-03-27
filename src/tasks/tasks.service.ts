import { Injectable, OnModuleInit } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { CreateTaskArgs, RemoveTaskArgs, UpdateTaskArgs } from './dto';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService implements OnModuleInit {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async onModuleInit() {
    await this.tasksRepository.createPhases();
  }

  getPhasesTasks() {
    return this.tasksRepository.getPhasesTasks();
  }

  createTask(createTaskArgs: CreateTaskArgs) {
    return this.tasksRepository.createTask(createTaskArgs);
  }

  updateTask(@Args() updateTaskArgs: UpdateTaskArgs) {
    return this.tasksRepository.updateTask(updateTaskArgs);
  }

  removeTask(@Args() removeTaskArgs: RemoveTaskArgs) {
    return this.tasksRepository.removeTask(removeTaskArgs);
  }
}
