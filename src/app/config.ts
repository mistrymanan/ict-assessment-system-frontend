export const config = {
  host: 'ict.assessment-system.tech/api',
  apiVersion: {assignmentsServiceVersion:'v2'},
  endpoints: {
    assignments: 'all',
    activeAssignments: 'active-assignments/all',
    activeAssignmentBySlug: 'active-assignments/slug',
    getUserQuestion: 'active-assignments/get-question',
    createAssignment: '',
    getAssignment: 'id',
    deleteAssignment: 'id',
    updateAssignment: 'id',
    toggleAssignmentStatus: 'id',
    getAssignmentBySlug: 'slug',
    addQuestion: 'questions/add-question',
    deleteQuestion: 'questions',
    run:  'executions/run',
    runMultiple: 'executions/run-multiple',
    questions : 'questions',
    updateQuestion : 'questions/update-question',
    runCode: 'submissions/run-code',
    startAssignment: 'submissions/start-submission',
    submit: 'submissions/submit',
    submission: 'submissions',
    builds: 'executions/builds',
    users: 'users',
    classroom: 'classrooms'
  }
};
