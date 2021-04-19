class PlagiarismResult{
    link:String
    language:String
}
export class Plagiarism{
    id:String
    classroomSlug:String
    assignmentId:String
    questionId:String
    time:String
    numberOfSubmissions:Number;
    status:String
    results:PlagiarismResult
}