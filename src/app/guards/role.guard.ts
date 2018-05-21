import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import * as jwt from 'angular2-jwt-simple';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const roles = next.data['roles'] as string;

    const token = localStorage.getItem('token');
    const roleToken = jwt.decode(token, 'my_pass').role;

    console.log(`role token : ${roleToken}`);
    console.log(`role guard : ${roles}`);



    if (roleToken === roles) {
      return true;
    }
    this.router.navigateByUrl('home');
    return false;
  }
}
