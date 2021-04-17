import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminClassroomDetails } from '../../../../models/admin-classroom-details';
import { AdminclassroomdetailsService } from '../../../../services/adminclassroomdetails.service';

@Component({
  selector: 'app-admin-classroom-table',
  templateUrl: './admin-classroom-table.component.html',
  styleUrls: ['./admin-classroom-table.component.css', "../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css",]
})
export class AdminClassroomTableComponent implements OnInit {
  
  adminclassroomdetails:AdminClassroomDetails[];
  dtOptions: any = {};
  constructor(
    private adminclassroomdetailsservice: AdminclassroomdetailsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.dtOptions={
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true,
      dom: 'lBfrtip',
      buttons: ['copy', 'csv', 'excel', 'print']
    };

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
