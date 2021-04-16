import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../../../../models/admin-user';
import { PagerService } from '../../../../services/pager.service';
import { UserService } from '../../../../services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 adminuser: AdminUser[]
 private allItems: AdminUser[];

  constructor(private adminuserservice:UserService,
              private pagerService: PagerService) {

   }
   // pager object
   pager: any = {};

   // paged items
   pagedItems: any[];

  ngOnInit(): void {
    this.getAdminUser();
    // this.http.get('')
    // .pipe(map((response: Response) => response.json()))
    // .subscribe(data => {
    //     this.allItems = data;
    //     this.setPage(1);
    // });
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
getAdminUser(){
  this.adminuserservice.getadminUser().subscribe(
    (response)=>{
      this.adminuser=response
      this.allItems = response;
      this.setPage(1);
    console.log(this.adminuser)
    }
  )
}

toggleAdminAccess(user:AdminUser): void {
  this.adminuserservice.patchAdminAccess(user.emailId).subscribe(
    () => {
      const current = user.isAdmin;
      user.isAdmin =! current;
    }
  );
}

toggleClassroomCreation(user:AdminUser): void {
  this.adminuserservice.patchClassroomCreationAccess(user.emailId).subscribe(
    () => {
      const current = user.allowedClassroomCreation;
      user.allowedClassroomCreation =! current;
    }
  );
}
}
