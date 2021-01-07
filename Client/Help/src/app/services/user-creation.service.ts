import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import {UserAccountService} from '../services/user-account.service';

@Injectable({
  providedIn: 'root'
})

// Service used during the user creation process
export class UserCreationService {
  // Temp user updated during the user creation process. Later used to update the user-account service
  newUser: User ={
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    topFiveProfiles: [],
    connections: [],
  }

  constructor(private userAccountService: UserAccountService) { }

  // Create a temp user (newUswer) during user account creation 
  setUpUser( tempUser: User){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"id":1,"email":tempUser.email,"password":tempUser.password,"userName":tempUser.username});

    type RequestInit = {
      method: string,
      headers: Headers,
      body: string,
      redirect: 'follow'
    }

    var requestOptions : RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3000/auth/signup", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    this.newUser = tempUser;
  }

  // Method used on the setup user account pages to update the temp user (newUser)
  updateFirstName(fName: string) {
      this.newUser.firstName = fName;    
  }

  // Method used on the setup user account pages to update the temp user (newUser)
  updateLastName(lName: string) {
      this.newUser.lastName = lName;    
  }

  // Method used on the setup user account pages to update the temp user (newUser)
  updatephone(phone: string) {
      this.newUser.phone = phone;    
  }

  // Update the user account service and database with the temp user
  createUser(){
    this.userAccountService.create(this.newUser);

    // TODO: update database
  }
}
