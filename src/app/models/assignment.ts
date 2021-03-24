import {Question} from './question';
export class Assignment {
  id: string;
  title: string;
  slug: string;
  status: string;
  duration: number;
  hasStartTime: boolean;
  hasDeadline: boolean;
  startTime: string;
  deadline: string;
  totalPoints:number;
  timed: boolean;
  questions: Question[];
}
