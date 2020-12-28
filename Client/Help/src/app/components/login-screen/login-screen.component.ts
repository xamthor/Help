import { Component, OnInit } from '@angular/core';
import {UserAccountService} from '../../services/user-account.service';

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

  updateUserAccount(){
    this.userAccountService.displayUser();
  }

}
