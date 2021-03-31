import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminClassroomDetails } from '../../../../models/admin-classroom-details';
import { AdminclassroomdetailsService } from '../../../../services/adminclassroomdetails.service';

@Component({
  selector: 'app-admin-classroom-table',
  templateUrl: './admin-classroom-table.component.html',
  styleUrls: ['./admin-classroom-table.component.css']
})
export class AdminClassroomTableComponent implements OnInit {
  
  adminclassroomdetails:AdminClassroomDetails[]
  constructor(
    private adminclassroomdetailsservice: AdminclassroomdetailsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  this.getAdminClassroomDetails();
  }

  getAdminClassroomDetails(){
    this.adminclassroomdetailsservice.getAdminClassrooms().subscribe(
      (response) =>{
        this.adminclassroomdetails=response
        console.log(this.adminclassroomdetails)
      }
    )
  }

}
