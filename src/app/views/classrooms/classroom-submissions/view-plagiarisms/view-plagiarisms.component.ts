import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plagiarism } from '../../../../models/plagiarism';
import { PlagiarismService } from '../../../../services/plagiarism.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-view-plagiarisms',
  templateUrl: './view-plagiarisms.component.html',
  styleUrls: ['./view-plagiarisms.component.scss']
})
export class ViewPlagiarismsComponent implements OnInit {
  plagiarisms:Plagiarism[];
  classroomSlug:string;
  assignmentId:string;
  questionId:string;
  dtOptions: any = {};
  constructor(
    private plagiarismService:PlagiarismService,
    private route: ActivatedRoute,
    private router: Router,
    public location: Location
    ) { }

  ngOnInit(): void {
    this.classroomSlug=this.route.snapshot.params.classroomSlug;
    this.assignmentId=this.route.snapshot.params.assignmentId;
    this.questionId=this.route.snapshot.params.questionId;
    console.log(this.classroomSlug)
    this.plagiarismService
    .getPlagiarismReports(this.classroomSlug,this.assignmentId,this.questionId)
    .subscribe(resp=>{
      this.plagiarisms=resp;
    });
    this.dtOptions={
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
    }

    generateNewReport(){
      this.plagiarismService
      .createPlagiarismReport(this.classroomSlug,this.assignmentId,this.questionId)
      .subscribe(resp=>{
        this.router.navigate(["classrooms",this.classroomSlug,"submissions","plagiarisms",resp.id],
        {queryParams: {refresh:true}});
      })
    }
    openPlagiarismReport(id:string){
      this.router.navigate(["classrooms",this.classroomSlug,"submissions","plagiarisms",id]);
    }
    backButton(){
      this.location.back();
    }
}