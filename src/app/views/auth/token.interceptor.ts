import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.user$.pipe(
      switchMap(user => user ? user.getIdToken() : null),
      switchMap((token) => {
          if (token) {
            request = request.clone({
              setHeaders: {Authorization: `Bearer ${token}`}
            });
          }
          return next.handle(request).pipe(
            tap(() => {
              },
              (err: any) => {
                if (err instanceof HttpErrorResponse) {
                  if (err.status !== 401) {
                    return;
                  }
                  this.authService.logout().subscribe(() => {
                    this.router.navigate(['login']);
                  });
                }
              })
          );
        }
      ));
  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
  }
];
