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
  firstName : string = this.userAccountService.getUserName();

  constructor(private userAccountService: UserAccountService) { }

  ngOnInit(): void {
  }  

}
