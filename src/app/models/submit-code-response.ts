class TestCaseResult {
  id: string;
  status: string;
  reason: string;
}

export class SubmitCodeResponse {
  assignmentId: string;
  questionId: string;
  submissionId: string;
  buildId: string;
  submissionStatus: string;
  status: string;
  score: number;
  testResults: TestCaseResult[];
  message: string;
}
