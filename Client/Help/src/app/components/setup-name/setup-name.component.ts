import { Component, OnInit } from '@angular/core';
import {UserAccountService} from '../../services/user-account.service';

@Component({
  selector: 'app-setup-name',
  templateUrl: './setup-name.component.html',
  styleUrls: ['./setup-name.component.css']
})
export class SetupNameComponent implements OnInit {
  titlePhone: string = "Phone Number";
  titleFirstName: string = "First Name";
  titleLastName: string = "Last Name";
  titleSearch: string = "Search";
  stage: number = 1;

  person = {
    username: "",
  };
  constructor(private userAccountService: UserAccountService) { }

  ngOnInit(): void {
  }

  getFirstName($event:any){
    this.userAccountService.updateFirstName($event);
  }  

  getLastName($event:any){
    this.userAccountService.updateLastName($event);
  }

  getPhone($event:any){
    this.userAccountService.updatephone($event);
  }

  goToNextSetupStage(){
    this.stage ++;

    // TEMP: FOR TESTING ONLY
    if(this.stage === 4){
      this.stage = 1;
    }
  }



}
