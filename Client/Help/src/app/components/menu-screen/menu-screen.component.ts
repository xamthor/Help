import { Component, OnInit } from '@angular/core';
import {UserAccountService} from '../../services/user-account.service';

@Component({
  selector: 'app-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.css']
})
export class MenuScreenComponent implements OnInit {

  constructor(private userAccountService: UserAccountService) { }

  logOut(){
    this.userAccountService.logOut();
  }

  ngOnInit(): void {
  }

}
