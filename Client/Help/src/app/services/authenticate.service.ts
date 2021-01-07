import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Share authentication of user after login
export class AuthenticateService {

  authenticateUser: string = ""

  constructor() { }

  isAuthenticated() :boolean{
    if(this.authenticateUser === ""){
      return false;
    }
    return true;
  }

  updateToken(newToken: string){
    this.authenticateUser = newToken;
    console.log(`Auth is ${newToken}`); //  Testing
  }
}
