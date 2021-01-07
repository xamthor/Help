import { Injectable } from '@angular/core';
import {UserAccountService} from '../services/user-account.service';
import {AuthenticateService} from '../services/authenticate.service';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private userAccountService: UserAccountService, private authenticateUser: AuthenticateService, private http: HttpClient) { }

  // Used on the log-in page to Simulate checking a database of users, validating the username/password, and updating the app
  async validateUser(userEmail: string, password: string): Promise<boolean>{
    
    let isValidated:boolean = false;
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    var raw = JSON.stringify({"email":"admin1@google.com","password":"password"});
     await this.http.post<any>('http://localhost:3000/auth/login', raw,{headers: headers}).subscribe(
      results => {
        console.log(results);
        this.newUser.username = results.data.user.userName;
        this.newUser.email = results.data.user.email;
        this.newUser.firstName = results.data.user.userName;
        this.authenticateUser.updateToken(results.token)
        this.userAccountService.create(this.newUser)
        isValidated = true;
      },
      Error => {
        console.log('Error happened')
      }
      
    );

    return isValidated;
  }
}
