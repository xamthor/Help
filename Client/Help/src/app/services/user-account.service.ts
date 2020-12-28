import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

user = {
  userName: "",
  password: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
};

  constructor() { }

  displayUser(){
    console.log(this.user);
  }

  updateUserName(name:string){
    this.user.userName = name;
  }

  updatePassword(password:string){
    this.user.password= password;
  }

  updateEmail(email:string){
    this.user.email = email;
  }

  updateFirstName(fName:string){
    this.user.firstName = fName;
  }

  updateLastName(lName:string){
    this.user.lastName = lName;
  }

  updatephone(phone:string){
    this.user.phone = phone;
  }
}
