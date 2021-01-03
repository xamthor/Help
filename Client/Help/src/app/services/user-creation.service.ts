import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import {UserAccountService} from '../services/user-account.service';

@Injectable({
  providedIn: 'root'
})
export class UserCreationService {
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

  // Create a temp user during user account creation 
  setUpUser( tempUser: User){
    this.newUser = tempUser;
    //console.log(this.newUser); // TESTING ONLY
  }

  updateFirstName(fName: string) {
      this.newUser.firstName = fName;    
  }

  updateLastName(lName: string) {
      this.newUser.lastName = lName;    
  }

  updatephone(phone: string) {
      this.newUser.phone = phone;    
  }

  // Update the user account service and database with the temp user
  createUser(){
    this.userAccountService.create(this.newUser);

    // TODO: update database
  }


}
