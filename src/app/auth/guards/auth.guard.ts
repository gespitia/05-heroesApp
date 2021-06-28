import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService,
              private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    // if (this.authService.auth.id) return true;
    // console.log('Bloqueado por el AuthGurd-CanActivate');
    // return false;

    return this.authService.verificaAuthenticacion().pipe(
      tap( estaAutenticado=>{
        if(!estaAutenticado){
          this.router.navigate(['./auth/login']);
        }
      } )
    )
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {

      return this.authService.verificaAuthenticacion().pipe(
        tap( estaAutenticado=>{
          if(!estaAutenticado){
            this.router.navigate(['./auth/login']);
          }
        } )
      );

    // if (this.authService.auth.id) return true;
    // console.log('Bloqueado por el AuthGurd - CantLoad');
    // return false;
  }
}
