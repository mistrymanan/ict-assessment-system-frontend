import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.loginViaGoogle().subscribe((result) => {
      console.log(result.user.email);
      this.checkUserExistance(result.user.email);
    });
  }

  checkUserExistance(username:string){
    this.userService.getRequest(username).subscribe(
      result=>{
        if( result.name==null ||result.name==''){
            return this.userService.patch(username).subscribe(resp=>{
              console.log(resp);
              this.router.navigate(['/']);
            });
        }
        else{
          this.router.navigate(['/']);
        }
      },
      error => { 
        if (error.status==404){
          this.userService.createUser(username).subscribe(
            result=>{
              console.log("user with "+result+"have been created")
              return this.userService.patch(username).subscribe(resp=>{
                console.log(resp);
                this.router.navigate(['/']);
              });
            }
          )
        }
        }
    )
  }
}
