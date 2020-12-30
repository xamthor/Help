import { Component, OnInit } from '@angular/core';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {UserAccountService} from '../../services/user-account.service';

@Component({
  selector: 'app-content-top-five',
  templateUrl: './content-top-five.component.html',
  styleUrls: ['./content-top-five.component.css']
})
export class ContentTopFiveComponent implements OnInit {
  profilePic = faUserCircle;
  arrayOfProfiles = this.userAccountService.getTopFive();

  constructor(private userAccountService: UserAccountService) { }

  ngOnInit(): void {
  }

}
