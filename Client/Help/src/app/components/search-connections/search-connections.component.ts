import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConnectionsService} from '../../services/connections.service';
//import { User } from '../../interfaces/user';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-connections',
  templateUrl: './search-connections.component.html',
  styleUrls: ['./search-connections.component.css']
})
export class SearchConnectionsComponent implements OnInit {
  profilePic = faUserCircle;
  titleSearch: string = "Search"; // Input field title and sets the icon in the input field
  query: string = ""; // variable updated from the input designiated input field and then used to update the temp User
  profiles: any = [
    {
      phoneNumber: "111--111-2222",
      firstName: "Bob",
      lastName: "Smith",
      _id: "100",
      email: "bobSmith@google.com",
      userName: "bSmith",
      __v: 0
    },
    {
      phoneNumber: "222-222-2222",
      firstName: "Jane",
      lastName: "Doe",
      _id: "200",
      email: "janeSmith@google.com",
      userName: "jSmith",
      __v: 0
    }
  ]; // TESTING
  //arrayOfProfiles = this.profiles; // TESTING
  arrayOfProfiles :any[] = []

  constructor( private router:Router, private connectionService: ConnectionsService) { }

  ngOnInit(): void {
  }

  createConnection(id:string){
    console.log(`${id} connection added to user`);
    this.connectionService.createConnection(id);
  }

  // Capture user input from input field
  getUser($event:any){
    this.query = $event;
  }  

  // Search database for users
  findUser(){
    this.connectionService.searchConnections(this.query).subscribe(data => {
      console.log(data); //Testing
      this.arrayOfProfiles = data;
    })
  } 

  finish(){
    this.router.navigate(['/feed']);
    console.log('finish adding connections')
  }

}
