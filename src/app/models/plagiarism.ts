class PlagiarismResult{
    link:String
    language:String
}
export class Plagiarism{
    id:String
    classroomSlug:String
    assignmentId:String
    questionId:String
    status:String
    results:PlagiarismResult
}