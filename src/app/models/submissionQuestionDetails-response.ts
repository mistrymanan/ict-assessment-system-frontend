export class SubmissionQuestionDetailsResponse {
  questionId: string;
  buildId: string;
  title: string;
  time: string;
  questionStatus: string;
  resultStatus: string;
  totalPoints: number;
  score: number;
  testResults: {id: number|string, status: string, reason: string}[];
}
