import { Injectable } from '@angular/core';
import {UserAccountService} from '../services/user-account.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
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

  constructor(private userAccountService: UserAccountService) { }
  // Simulate checking a database of users


  validateUser(userName: string, password: string): boolean{
    //let foundUser: User;
    let isValidated:boolean = false;
    this.users.forEach((currentUser: User) => {
      if(currentUser.username === userName && currentUser.password === password){
        //foundUser = currentUser;
        this.userAccountService.create(currentUser);
        isValidated = true;
      }
    })

    return isValidated;    
  }
}
