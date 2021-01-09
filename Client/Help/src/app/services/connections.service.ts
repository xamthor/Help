import { Injectable } from '@angular/core';
import {AuthenticateService} from '../services/authenticate.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  constructor(private http: HttpClient, private authenticateUser: AuthenticateService, private cookieService: CookieService) { }

  searchConnections(searchTerm:string){
    const authToken = this.authenticateUser.getAuthToken();
    this.cookieService.set('jwt',authToken);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let options = { headers: headers, withCredentials: true };
    return this.http.get<any>(`http://localhost:3000/search?s=${searchTerm}`, options);    
  }
}
