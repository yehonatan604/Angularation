import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginTypes } from 'src/app/enums/login-types.enum';
import { User } from 'src/app/Interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import { Str2Md5 } from 'src/app/utilities/str2md5.utility';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(private usersService: UsersService) { }
  @ViewChild('loginForm') loginForm!: NgForm;
  radioValue!: string;
  formUser!: User;

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
      password: Str2Md5.MD5(this.loginForm.value.formGroup.password),
      authLevel: 0
    }
  }

  onLogin() {
    this.usersService.fetchItems().subscribe(users => {
      let index: number = users.findIndex(e => e.email === this.formUser.email);
      if (users[index].password == this.formUser.password) {
        this.usersService.AddLoginUser(this.formUser);
        Swal.fire('Success!', `${this.formUser.userName} logged in successfully.`, `success`)
      }
      else {
        Swal.fire('Login Failed!', `You've entered wrong password!!!`, 'error');
      }
    })
  }

  onRegister() {
    this.formUser.authLevel = 1;
    this.formUser.id = this.usersService.getLastId() == 0 ? 1 : + 1;
    this.usersService.addUser(this.formUser).subscribe(() => {
      Swal.fire(`${this.formUser.userName} Registered Successfully!`, `you can login now.`, 'success');
    });
  }

  onToggleLogin() {
    this.radioValue = `${LoginTypes.Login}`;
  }

  onToggleRegister() {
    this.radioValue = `${LoginTypes.Register}`;
  }
}
