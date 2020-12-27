import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  gotoCreateAccountViewScreen(){
    this.register = true;
    console.log("Button pressed")
  }

}
