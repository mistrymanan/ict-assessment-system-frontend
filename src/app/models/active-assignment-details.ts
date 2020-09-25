import { UserQuestion } from './user-question';

export class ActiveAssignmentDetails {
    id: string;
    title: string;
    slug: string;
    currentStatus: string;
    duration: number;
    hasStartTime: boolean;
    hasDeadline: boolean;
    startTime: string;
    deadline: string;
    timed: boolean;
    questions: UserQuestion[];
} 