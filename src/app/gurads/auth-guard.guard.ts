import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      let result = false;
      if (this.usersService.loggedInUser !== undefined) {
        result = this.usersService.loggedInUser.authLevel === 2;
      } 
      if (!result) {
        Swal.fire(`Access Denied!`, 'this route is private.', 'error');
        this.router.navigate(['/']);
      }
    return result;
  }
}
