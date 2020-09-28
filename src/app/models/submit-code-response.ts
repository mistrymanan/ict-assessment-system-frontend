class TestCaseResult {
  id: string;
  status: string;
}

export class SubmitCodeResponse {
  assignmentId: string;
  questionId: string;
  submissionId: string;
  buildId: string;
  submissionStatus: string;
  status: string;
  score: number;
  testCases: TestCaseResult[];
}
