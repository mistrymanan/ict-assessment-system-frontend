import { ClassroomUserDetails } from "./classroom-user-details";

export class Classroom{
    title:String;
    slug:String;
    ownerEmail:String;
    ownerName:String;
    instructors:ClassroomUserDetails[];
    enrolledUsers:ClassroomUserDetails[];
}