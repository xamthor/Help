import { Component, OnInit } from '@angular/core';
import {UserAccountService} from '../../services/user-account.service';
import {User} from '../../interfaces/user'

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  titleUserName: string = "Username";
  titleUserPassword: string = "Password";
  titleUserEmail: string = "Email";
  register: boolean = false;

  constructor(private userAccountService: UserAccountService) { }

  ngOnInit(): void {
  }

  createAccountAndLogin(user: User) {
    try {
      this.userAccountService.create(user);
    }
    catch (err) {

    }

    // TODO: Redirect the user to the feed page

  }

  gotoCreateAccountViewScreen(){
    this.register = true;
  }

  getUserName($event:any){
    this.userAccountService.updateUserName($event);
  }

  getPassword($event:any){
    this.userAccountService.updatePassword($event);
  }

  getEmail($event:any){
    this.userAccountService.updateEmail($event);
  }

}
