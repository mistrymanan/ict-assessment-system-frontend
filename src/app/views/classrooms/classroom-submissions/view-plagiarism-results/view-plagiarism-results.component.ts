import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plagiarism } from '../../../../models/plagiarism';
import { PlagiarismService } from '../../../../services/plagiarism.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-view-plagiarism-results',
  templateUrl: './view-plagiarism-results.component.html',
  styleUrls: ['./view-plagiarism-results.component.scss']
})
export class ViewPlagiarismResultsComponent implements OnInit {
  plagiarism:Plagiarism;
  dtOptions: any = {};
  plagiarismId:string;
  refresh:boolean;
  languageValue={java:"JAVA",c:"C",cpp:"CPP"};
  constructor(private plagiarismService:PlagiarismService,
    private route: ActivatedRoute,
    private router: Router,
    private location:Location) { }

  ngOnInit(): void {
    this.dtOptions={
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };

    this.plagiarismId=this.route.snapshot.params.plagiarismId;
    this.refresh=this.route.snapshot.queryParamMap.get('refresh')==="true";
    console.log("the page will be refreshed automatically");
    this.getPlagiarismData();
      // do {
      //   this.getPlagiarismData();
      //   setTimeout(()=>{console.log("waiting for 20 sec");},20000);
      // } while (this.refresh);
  }

  getPlagiarismData(){
    this.plagiarismService.getPlagiarismReport(this.plagiarismId)
    .subscribe(resp=>{
      this.plagiarism=resp;
      if(this.plagiarism.status==="GENERATED"){
        this.refresh=false;
      }
    });
  }
  openGraph(id:string,language:string){
    console.log(this.languageValue[language]);
    const graphUrl="http://aas.ict.gnu.ac.in/api/plagiarisms/public/"+id+"/results/"+this.languageValue[language];
    window.open("http://data2graph.assessment-system.tech?graph_url="
    +encodeURIComponent(graphUrl),"_blank");
  }
  backButton(){
    this.location.back();
  }
}