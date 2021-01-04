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
