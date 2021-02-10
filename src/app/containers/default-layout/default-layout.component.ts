import {Component} from '@angular/core';
import {navItems} from '../../_nav';
import {AuthService} from '../../services/auth.service';
import {User} from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  user: any = {};

  constructor(private authService: AuthService,
    private router: Router) {
    authService.user$.subscribe((user: User) => {
      this.user = user;
      console.log("User:"+this.user.email);
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['login']);
    })    
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
