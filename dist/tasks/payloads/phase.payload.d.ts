import { Task } from '../entities';
export declare class PhasePayload {
    id?: string;
    title: string;
    tasks?: Task[];
    allTasksCompleted: boolean;
    isDisabled: boolean;
}
