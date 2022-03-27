import { OnModuleInit } from '@nestjs/common';
import { CreateTaskArgs, RemoveTaskArgs, UpdateTaskArgs } from './dto';
import { TasksRepository } from './tasks.repository';
export declare class TasksService implements OnModuleInit {
    private readonly tasksRepository;
    constructor(tasksRepository: TasksRepository);
    onModuleInit(): Promise<void>;
    getPhasesTasks(): Promise<import("./payloads").PhasePayload[]>;
    createTask(createTaskArgs: CreateTaskArgs): Promise<import("./entities").Task>;
    updateTask(updateTaskArgs: UpdateTaskArgs): Promise<import("./entities").Task>;
    removeTask(removeTaskArgs: RemoveTaskArgs): Promise<void>;
}
