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
  newUserName: string = "";
  newUserPassword: string = "";
  newUserEmail: string = "";
  //newUser: User = {};

  constructor(private userAccountService: UserAccountService) { }

  ngOnInit(): void {
  }

  //Creates a new User and add to the User Database
  createAccountAndLogin() {
    try {
      let newUser : User = {
        username: this.newUserName,
        password: this.newUserPassword,
        email: this.newUserEmail,
        firstName: "",
        lastName: "",
        phone: "",
        topFiveProfiles: [],
        connections: [],
      };

      this.userAccountService.create(newUser);
      console.log(newUser);

    }
    catch (err) {

    }

    // TODO: Redirect the user to the user account setup screen 

  }

  gotoCreateAccountViewScreen(){
    this.register = true;
  }

  // Capture user input from input field
  getUserName($event:any){
    this.newUserName = $event;
  }

  // Capture user input from input field
  getPassword($event:any){
    this.newUserPassword = $event;
  }

  // Capture user input from input field
  getEmail($event:any){
    this.newUserEmail = $event;
  }

}
