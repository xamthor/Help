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
    {name: "Jen Turner", lastMessageTime:"23"},
    {name: "Jake Stafford", lastMessageTime:"26"},
    {name: "Katie Drake", lastMessageTime:"32"},
    {name: "Joe McCarty", lastMessageTime:"40"},
    {name: "Charlie Patterson", lastMessageTime:"48"},
    {name: "James Bond", lastMessageTime:"48"},
    {name: "Daisy Watson", lastMessageTime:"49"},
    {name: "Tommy Drake", lastMessageTime:"48"},
    {name: "Bacari White", lastMessageTime:"48"},
    {name: "Maranida Watson", lastMessageTime:"48"},
    {name: "Nate Stokes", lastMessageTime:"48"},
    {name: "Sean Wilson", lastMessageTime:"48"},
    {name: "Paul Malon", lastMessageTime:"48"},
  ]
};

  constructor() { }

  getUser(){
    return this.user;
  }

  getUserName(){
    return this.user.userName;
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
