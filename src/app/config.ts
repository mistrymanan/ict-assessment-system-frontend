export const config = {
  host: 'ict.assessment-system.tech/api',
  endpoints: {
    assignments: 'assignments/all',
    activeAssignments: 'assignments/active-assignments/all',
    activeAssignmentBySlug: 'assignments/active-assignments/slug',
    getUserQuestion: 'assignments/active-assignments/get-question',
    createAssignment: 'assignments',
    getAssignment: 'assignments/id',
    deleteAssignment: 'assignments/id',
    updateAssignment: 'assignments/id',
    toggleAssignmentStatus: 'assignments/id',
    getAssignmentBySlug: 'assignments/slug',
    addQuestion: 'assignments/questions/add-question',
    deleteQuestion: 'assignments/questions',
    run:  'executions/run',
    runMultiple: 'executions/run-multiple',
    questions : 'assignments/questions',
    updateQuestion : 'assignments/questions/update-question',
    runCode: 'submissions/run-code',
    startAssignment: 'submissions/start-submission',
    submit: 'submissions/submit',
    submission: 'submissions',
    builds: 'executions/builds',
    users: 'users',
    classroom: 'classrooms'
  }
};
