export const config = {
  host: '35.184.28.10/api',
  endpoints: {
    assignments: 'assignments/all',
    activeAssignments: 'assignments/active-assignments/all',
    activeAssignmentBySlug: 'assignments/active-assignments/slug',
    getUserQuestion: 'assignments/active-assignments/get-question',
    createAssignment: 'assignments',
    deleteAssignment: 'assignments/id',
    updateAssignment: 'assignments/id',
    toggleAssignmentStatus: 'assignments/id',
    getAssignmentBySlug: 'assignments/slug',
    addQuestion: 'assignments/questions/add-question',
    run:  'executions/run'
  }
};
