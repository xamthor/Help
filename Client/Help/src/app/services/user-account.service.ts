import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Connection } from '../interfaces/connections';
import { User } from '../interfaces/user';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {
  currentUser: User = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    topFiveProfiles: [],
    connections: [],
  }

  constructor() {}

  create(user: User) {
    //this.users.push(user); // Save for later
    this.currentUser = user;
console.log(user);
    // TODO: Replace this method implementation with a call to the server to create an account
  }

  // Return an array of connections that have active messages in the messages content page
  getUserMessages(): any {
    // Creates an empty array of with inteface Connection type objects
    let connectionsWithMessages: Connection[] = [];
/*
    // Find and return all connections with an active message time stamp
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      user.connections.forEach((connection) => {
        if (connection.lastMessageTimeStamp > 0) {
          connectionsWithMessages.push(connection);
        }
      });
    }
*/
    this.currentUser.connections.forEach((connection) => {
      if (connection.lastMessageTimeStamp > 0) {
        connectionsWithMessages.push(connection);
      }
    });
    return connectionsWithMessages;
  }

  findUserByUsername(username: string): User | undefined {
    return _.find(this.users, (user) => user.username === username);
  }

  getFirstName() {
/*    
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      return user.firstName;
    }
    return '';
*/
    return this.currentUser.firstName;    
  }

  getUserName() {
    // TODO check the current session to detect which user is active
    //return 'jsmiley';
    return this.currentUser.username;
  }

  getConnections() {
/*    
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      return user.connections;
    }
    return [];
*/
  return this.currentUser.connections;    
  }

  getTopFive() {
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      return user.topFiveProfiles;
    }
    return [];
  }
/*
  updateUserName(name: string) {
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      user.username = name;
    }
  }

  updatePassword(password: string) {
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      user.password = password;
    }

    // TODO: call the server to update the user object in the database with the new password
    // PUT USER

    // GET - return a USER
    // POST - Create a User
    // PUT - Replace a user with a new User
    // PATCH - Update an existing user's by only changing the fields you supply
  }

  updateEmail(email: string) {
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      user.email = email;
    }
  }

  updateFirstName(fName: string) {
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      user.firstName = fName;
    }
  }

  updateLastName(lName: string) {
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      user.lastName = lName;
    }
  }

  updatephone(phone: string) {
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      user.phone = phone;
    }
  }
*/
}
