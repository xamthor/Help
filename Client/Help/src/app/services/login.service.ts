import { Injectable } from '@angular/core';

import {UserAccountService} from '../services/user-account.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

// Service used when a user attempts to log in. 
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

  // Used on the log-in page to Simulate checking a database of users, validating the username/password, and updating the app
  validateUser(userName: string, password: string): boolean{
    let isValidated:boolean = false;
/*    
    this.users.forEach((currentUser: User) => {
      if(currentUser.username === userName && currentUser.password === password){
        this.userAccountService.create(currentUser);
        isValidated = true;
      }
    })
*/
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjVhMDI2ZjEzZTZiNjU0Y2UwODNhMyIsImlhdCI6MTYwOTkzNTI1NCwiZXhwIjoxNjEwNzk5MjU0fQ.Ew7Y12ox_z2wKlqpPJYVH8AnUskesPNbPSx4MLTh7gjoAOF6v_tLmEqmgzi0Rs0N8mQ19jUts4-HQ6MMekTZsyNCEPd0jyALSJBHZEIcP7W66DZbd_1vhNsxGpflYncmVz7mtVotBf96XxVn3ojhbUF9RAg1gqx7L6mRRTKo8Ee8QFPaavs2Py3jd4yZ6oruiOybZVIVTMVwRO5V2QqcjKOrzTtoUlPU9JxxxdnWR3SX1mD3eS-GFg-C-HeMCXBpm3ClKXCI9Su6BBJG7fBKTsjXvA9suJovMa8hSJIQGBusAlUDzur-aiyR08qSwQtmxxF5q1MHs1MlfeYukuEWKQ");
    myHeaders.append('Access-Control-Allow-Origin', '*',)
    myHeaders.append('Access-Control-Allow-Credentials', 'true')

    let raw = JSON.stringify({"email":"admin1@google.com","password":"password"});

    type RequestInit = {
      method: string,
      headers: Headers,
      body: string,
      redirect: "follow"
    }

    let requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3000/auth/login", requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result); console.log("It ran")})
      .catch(error => console.log('error', error));

    return isValidated;    
  }
}
