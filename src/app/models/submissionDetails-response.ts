import {SubmissionQuestionDetailsResponse} from './submissionQuestionDetails-response';

export class SubmissionDetailsResponse {
  id: string;
  email: string;
  submissionId: string;
  assignmentId: string;
  status: string;
  submissionStatus: string;
  startOn: string;
  completedOn: string;
  currentScore: number;
  assignmentScore: number;
  questionEntities: SubmissionQuestionDetailsResponse[];
}
