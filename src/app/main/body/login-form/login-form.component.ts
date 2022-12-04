import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginTypes } from 'src/app/enums/login-types.enum';
import { User } from 'src/app/Interfaces/user.interface';
import { Str2Md5Service } from 'src/app/services/str2md5.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [Str2Md5Service]
})
export class LoginFormComponent implements OnInit {
  constructor(private usersService: UsersService, private str2Md5: Str2Md5Service, private router: Router) { }
  @ViewChild('loginForm') loginForm!: NgForm;

  radioValue!: string;
  formUser!: User;
  today!: Date;
  register!: string;

  ngOnInit() {
    this.today = new Date();
    this.register = `${LoginTypes.Register}`;
  }

  onSubmit() {
    this.assignUser();
    this.radioValue === `${LoginTypes.Register}` ? this.onRegister() : this.onLogin();
  }

  assignUser() {
    this.formUser = {
      id: 0,
      userName: this.loginForm.value.formGroup.userName,
      dob: this.loginForm.value.formGroup.dob,
      email: this.loginForm.value.formGroup.email,
      password: this.str2Md5.md5(this.loginForm.value.formGroup.password),
      authLevel: 0
    }
  }

  onLogin() {
    this.usersService.fetchItems().subscribe(users => {
      let index: number = users.findIndex(e => e.email === this.formUser.email);
      if (users[index].password == this.formUser.password) {
        this.usersService.addLoginUser(this.formUser);
        Swal.fire('Success!', `${this.formUser.userName} logged in successfully.`, `success`)
          .then(() => this.usersService.fetchItems().subscribe(users => {
            users[index].authLevel === 2 ?
              this.router.navigate(['/admin']) :
              this.router.navigate(['/cart']);
          }));
      }
      else {
        Swal.fire('Login Failed!', `You've entered wrong password!!!`, 'error');
      }
    })
  }

  onRegister() {
    this.formUser.authLevel = 1;
    this.formUser.id = this.usersService.getLastId() + 1;
    this.usersService.addUser(this.formUser);
    Swal.fire(`${this.formUser.userName} Registered Successfully!`, `you can login now.`, 'success')
      .then(() => this.router.navigate(['/login']))
  }

  onToggleLogin() {
    this.radioValue = `${LoginTypes.Login}`;
  }

  onToggleRegister() {
    this.radioValue = `${LoginTypes.Register}`;
  }
}
