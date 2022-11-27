import { Component } from '@angular/core';
import { User } from 'src/app/Interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  user!: User;
  
  constructor(private usersService: UsersService) { }

  getUserAuthLevel(): number {
    if (this.usersService.loggedInUser !== undefined) {
      return this.usersService.loggedInUser.authLevel;
    } 
    return 0;
  }
}