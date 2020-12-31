import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

user = {
  userName: "jsmiley",
  password: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  topFiveProfiles:[
    {firstName: "Katie"},
    {firstName: "Jen"},
    {firstName: "Joe"},
    {firstName: "Charlie"},
    {firstName: "Jake"},
  ],
  connections: [
    {name: "Jen Turner", lastMessageTimeStamp:"23"},
    {name: "Jake Stafford", lastMessageTimeStamp:"26"},
    {name: "Katie Drake", lastMessageTimeStamp:"32"},
    {name: "Joe McCarty", lastMessageTimeStamp:"40"},
    {name: "Charlie Patterson", lastMessageTimeStamp:"48"},
    {name: "James Bond", lastMessageTimeStamp:"48"},
    {name: "Daisy Watson", lastMessageTimeStamp:"49"},
    {name: "Tommy Drake", lastMessageTimeStamp:"48"},
    {name: "Bacari White", lastMessageTimeStamp:"48"},
    {name: "Maranida Watson", lastMessageTimeStamp:"48"},
    {name: "Nate Stokes", lastMessageTimeStamp:"48"},
    {name: "Sean Wilson", lastMessageTimeStamp:"48"},
    {name: "Paul Malon", lastMessageTimeStamp:"48"},
  ]
};

  constructor() { }

  getUser(){
    return this.user;
  }

  getUserName(){
    return this.user.userName;
  }

  getConnections(){
    return this.user.connections;
  }

  getTopFive(){
    return this.user.topFiveProfiles;
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
