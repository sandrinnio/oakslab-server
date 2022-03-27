import { Phase } from '.';
export declare class Task {
    id?: string;
    text: string;
    isDone?: boolean;
    phase: Phase;
    createdAt?: Date;
    updatedAt?: Date;
}
