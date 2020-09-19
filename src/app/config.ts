export const config = {
  host: '35.184.28.10/api',
  endpoints: {
    assignments: 'assignments/all',
    createAssignment: 'assignments',
    deleteAssignment: 'assignments',
    updateAssignment: 'assignments',
    toggleAssignmentStatus: 'assignments',
    getAssignmentBySlug: 'assignments/slug',
    addQuestion: 'assignments/questions/add-question',
    run:  'executions/run'
  }
};
