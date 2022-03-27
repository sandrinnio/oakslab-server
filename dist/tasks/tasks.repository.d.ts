import { Repository } from 'typeorm';
import { CreateTaskArgs, RemoveTaskArgs, UpdateTaskArgs } from './dto';
import { Phase, Task } from './entities';
import { PhasePayload } from './payloads';
export declare class TasksRepository {
    private readonly tasksRepository;
    private readonly phasesRepository;
    constructor(tasksRepository: Repository<Task>, phasesRepository: Repository<Phase>);
    createPhases(): Promise<void>;
    getPhasesTasks(): Promise<PhasePayload[]>;
    createTask(createTaskArgs: CreateTaskArgs): Promise<Task>;
    updateTask(updateTaskArgs: UpdateTaskArgs): Promise<Task>;
    removeTask(removeTaskArgs: RemoveTaskArgs): Promise<void>;
}
