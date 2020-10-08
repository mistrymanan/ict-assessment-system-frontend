import { UserQuestion } from './user-question';

export class ActiveAssignmentDetails {
    id: string;
    title: string;
    slug: string;
    submissionStatus: string;
    duration: number;
    hasStartTime: boolean;
    totalPoints: number;
    currentScore: number;
    hasDeadline: boolean;
    startTime: string;
    deadline: string;
    timed: boolean;
    questions: UserQuestion[];
}
