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

  username: string = "";
  password: string = "";
  email: string = "";

  person = {
    username: this.username,
    password: this.password,
    email: this.email,
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  gotoCreateAccountViewScreen(){
    this.register = true;
  }

  getUserName($event:any){
    this.person.username = $event;
  }

  getPassword($event:any){
    this.person.password = $event;
    console.log(this.person);
  }

  getEmail($event:any){
    this.person.email = $event;
  }

}
