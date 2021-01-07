import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserAccountService} from '../../services/user-account.service';
import {UserCreationService} from '../../services/user-creation.service';
import {LoginService} from '../../services/login.service';
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
  inValidLogin: boolean = false;

  constructor(private userCreationService: UserCreationService, private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    let test =this.loginService.validateUser(this.newUserEmail, this.newUserPassword);
    console.log(test)
    if(test){        
      this.router.navigate(['/feed']); // Redirect the user to the user account setup screen 
    }else{
      this.inValidLogin = true;
    }
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

      this.userCreationService.setUpUser(newUser);

    }
    catch (err) {

    }

    // Redirect the user to the user account setup screen 
    this.router.navigate(['/setup']);
  }

  // Method to switch screen from Log-in to Create a User screen
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
