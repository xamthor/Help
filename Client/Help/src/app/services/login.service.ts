import { Injectable } from '@angular/core';
import {UserAccountService} from '../services/user-account.service';
import {AuthenticateService} from '../services/authenticate.service';
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

  constructor(private userAccountService: UserAccountService, private authenticateUser: AuthenticateService) { }

  // Used on the log-in page to Simulate checking a database of users, validating the username/password, and updating the app
  async validateUser(userName: string, password: string): Promise<boolean>{
    
    let isValidated:boolean = false;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"email":"admin1@google.com","password":"password"});

    type RequestInit = {
      method: string,
      headers: Headers,
      body: string,
      redirect: 'follow'
    }

    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch("http://localhost:3000/auth/login", requestOptions)
      .then(response => response.text())
      .then(result => {
        let data = JSON.parse(result);
        if(data.status === "success"){
            this.newUser.username = data.data.userName;
            this.newUser.email = data.data.email;

            this.authenticateUser.updateToken(data.token)
            isValidated = true;
            return isValidated;
        }else{
          console.log("Unsuccessful login")
          return isValidated;
        }

      })
      .catch(error => {
        console.log('error', error)
        return isValidated;
      });  

      return isValidated;
  }
}
