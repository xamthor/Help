import { Component, OnInit } from '@angular/core';
import {UserAccountService} from '../../services/user-account.service';
import {UserCreationService} from '../../services/user-creation.service';
import {Router} from '@angular/router';

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
  newUserFname: string = "";
  newUserLname: string = "";
  newUserPhone: string = "";

  person = {
    username: "",
  };
  constructor(private userCreationService: UserCreationService, private router:Router) { }

  ngOnInit(): void {
  }

  // Capture user input from input field
  getFirstName($event:any){
    this.newUserFname = $event;
    //this.userCreationService.updateFirstName($event);
  }  

  // Capture user input from input field
  getLastName($event:any){
    this.newUserLname = $event;
    //this.userCreationService.updateLastName($event);
  }

  // Capture user input from input field
  getPhone($event:any){
    this.newUserPhone = $event;
    //this.userCreationService.updatephone($event);
  }

  goToNextSetupStage(){
    if(this.stage === 1){
      this.userCreationService.updateFirstName(this.newUserFname);
      this.userCreationService.updateLastName(this.newUserLname);
    }

    if(this.stage === 2){
      this.userCreationService.updatephone(this.newUserPhone);
    }

    if(this.stage === 3){
      this.userCreationService.createUser();
      // Redirect the user to the feed communication's screen 
      this.router.navigate(['/feed']);
    }

    this.stage ++;
 /*
    if(this.stage === 4){
      // Redirect the user to the feed communication's screen 
      this.router.navigate(['/feed']);
    }
    this.stage ++;

    // TEMP: FOR TESTING ONLY
   
    if(this.stage === 4){
      this.stage = 1;
    }
*/
  }



}
