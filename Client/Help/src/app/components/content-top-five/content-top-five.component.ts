import { Component, OnInit } from '@angular/core';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {ConnectionsService} from '../../services/connections.service';

@Component({
  selector: 'app-content-top-five',
  templateUrl: './content-top-five.component.html',
  styleUrls: ['./content-top-five.component.css']
})
export class ContentTopFiveComponent implements OnInit {
  profilePic = faUserCircle;
  dummyData = [
    {firstName:"Jane", lastName:"Doe"},
    {firstName:"John", lastName:"Smith"},
    {firstName:"Carl", lastName:"Williams"},
  ]
  arrayOfProfiles = this.dummyData;
  //arrayOfProfiles :any[]= [];

  constructor(private connectionsService:ConnectionsService ) { }

  ngOnInit(): void {
/*
    this.connectionsService.getTopFive().subscribe(data => {
      this.arrayOfProfiles = data;
      //console.log(data); //TESTING
    })
*/
  }

}
