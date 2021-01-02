import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Connection } from '../interfaces/connections';
import { User } from '../interfaces/user';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {
  users: User[] = [
    {
      username: 'jsmiley',
      password: 'password',
      email: 'jsmiley@foo.bar',
      firstName: 'JC',
      lastName: 'Smiley',
      phone: '1234567890',
      topFiveProfiles: [
        { firstName: 'Katie' },
        { firstName: 'Jen' },
        { firstName: 'Joe' },
        { firstName: 'Charlie' },
        { firstName: 'Jake' },
      ],
      connections: [
        { name: 'Jen Turner', lastMessageTimeStamp: 23 },
        { name: 'Jake Stafford', lastMessageTimeStamp: 26 },
        { name: 'Katie Drake', lastMessageTimeStamp: 32 },
        { name: 'Joe McCarty', lastMessageTimeStamp: 40 },
        { name: 'Charlie Patterson', lastMessageTimeStamp: 48 },
        { name: 'James Bond', lastMessageTimeStamp: 48 },
        { name: 'Daisy Watson', lastMessageTimeStamp: 49 },
        { name: 'Tommy Drake', lastMessageTimeStamp: 0 },
        { name: 'Bacari White', lastMessageTimeStamp: 0 },
        { name: 'Maranida Watson', lastMessageTimeStamp: 0 },
        { name: 'Nate Stokes', lastMessageTimeStamp: 0 },
        { name: 'Sean Wilson', lastMessageTimeStamp: 0 },
        { name: 'Paul Malon', lastMessageTimeStamp: 0 },
      ],
    },
  ];

  constructor() {}

  create(user: User) {
    this.users.push(user);

    // TODO: Replace this method implementation with a call to the server to create an account
  }

  // Return an array of connections that have active messages in the messages content page
  getUserMessages(): any {
    // Creates an empty array of with inteface Connection type objects
    let connectionsWithMessages: Connection[] = [];

    // Find and return all connections with an active message time stamp
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      user.connections.forEach((connection) => {
        if (connection.lastMessageTimeStamp > 0) {
          connectionsWithMessages.push(connection);
        }
      });
    }
    return connectionsWithMessages;
  }

  findUserByUsername(username: string): User | undefined {
    return _.find(this.users, (user) => user.username === username);
  }

  getFirstName() {
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      return user.firstName;
    }
    return '';
  }

  getUserName() {
    // TODO check the current session to detect which user is active
    return 'jsmiley';
  }

  getConnections() {
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      return user.connections;
    }
    return [];
  }

  getTopFive() {
    let user = this.findUserByUsername(this.getUserName());

    if (user) {
      return user.topFiveProfiles;
    }
    return [];
  }

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
}
