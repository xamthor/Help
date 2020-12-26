import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  goToNextSetupStage(){
    this.stage ++;

    // TEMP: FOR TESTING ONLY
    if(this.stage === 4){
      this.stage = 1;
    }
  }

}
