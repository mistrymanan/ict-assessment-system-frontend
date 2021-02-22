import {Component} from '@angular/core';
import {navItems} from '../../_nav';
import {AuthService} from '../../services/auth.service';
import {User} from 'firebase';
import {Router} from '@angular/router';
import { DataService } from '../../services/data.service';
import { ClassroomsService } from '../../services/classrooms.service';
import { ClassroomUserResponse } from '../../models/ClassroomUserResponse';
import { NavChild } from '../../models/nav-child';
import { ClassroomDetails } from '../../models/classroom-details';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  user: any = {};
  public userNavData: []=[];
  public teaching;
   
  public enrolled;
   
  userClassroomsDetails: ClassroomUserResponse;
  constructor(private authService: AuthService,
    private router: Router,private dataService:DataService,private  classroomService: ClassroomsService) {
              // this.teaching= {
              //   name:'Teaching',
              //   url:'',
              //   icon: 'fas fa-chalkboard-teacher',
              //   //children: new Array()
              //   children: this.getUserTeachingClassroom()
              // }
              // this.enrolled= {
              //   name:'Enrolled',
              //   url:'',
              //   icon: 'fas fa-chalkboard-teacher',
              //   children: new Array()
              // }
              //console.log(this.getUserTeachingClassroom());
      //this.navItems.concat()
    authService.user$.subscribe((user: User) => {
      this.user = user;
      console.log("User:"+this.user.email);
    });
    
    //this.getUserNavData();
    this.getUserNavData();
    
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['login']);
    })    
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  getUserNavData(){
//     this.navItems.forEach((navItem)=>{
// console.log(navItem);
//     })
    const teaching= {
      name:'Teaching',
      url:'',
      icon: 'fas fa-chalkboard-teacher',
      //children: new Array()
      children: []
    }
     const enrolled= {
                name:'Enrolled',
                url:'',
                icon: 'fas fa-chalkboard-teacher',
                children: []
              }
    const instructClass=new Array<NavChild>();
    const enrolledClass=new Array<NavChild>();
    this.classroomService.getUserClassrooms().subscribe(
      (response) =>{
        
        this.userClassroomsDetails=response;
        for (const value of this.userClassroomsDetails.instructClassrooms) {
          const temp=new NavChild();
            temp.name=value.classroomTitle
            temp.url='/classrooms/'+value.classroomSlug+'/instructor-dashboard'
            temp.icon='fa fa-tasks'
            instructClass.push(temp);
        }
        for (const value of this.userClassroomsDetails.enrolledClassrooms) {
          const temp=new NavChild();
            temp.name=value.classroomTitle
            temp.url='/classrooms/'+value.classroomSlug+'/instructor-dashboard'
            temp.icon='fa fa-tasks'
            enrolledClass.push(temp);
        }
        teaching.children=instructClass;
        enrolled.children=enrolledClass;
        if(teaching.children.length>0){
          navItems.push(teaching);
        }
        if(enrolled.children.length>0){
          navItems.push(enrolled);
        }        
      }
  )
  }
}