import { Component, OnInit } from '@angular/core';
import {faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {UserAccountService} from '../../services/user-account.service';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {
  profilePic = faUserCircle;
  menu = faBars;
  firstName : string = "";

  constructor(private userAccountService: UserAccountService) { }

  logOut(){
    this.userAccountService.logOut();
  }

  ngOnInit(): void {
    //this.firstName = this.userAccountService.getFirstName();
    this.updateFirstName();
  }  

  updateFirstName(){
    this.userAccountService.getFirstName().subscribe(name => {
      console.log(`Name is ${name}`);
      this.firstName = name;
    })
  }

}
