import { CreateTaskArgs, RemoveTaskArgs, UpdateTaskArgs } from './dto';
import { PhasePayload } from './payloads';
import { Task } from './entities';
import { TasksService } from './tasks.service';
export declare class TasksResolver {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getPhasesTasks(): Promise<PhasePayload[]>;
    createTask(createTaskArgs: CreateTaskArgs): Promise<Task>;
    updateTask(updateTaskArgs: UpdateTaskArgs): Promise<Task>;
    removeTask(removeTaskArgs: RemoveTaskArgs): Promise<void>;
}
