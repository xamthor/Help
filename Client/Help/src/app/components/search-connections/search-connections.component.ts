import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-connections',
  templateUrl: './search-connections.component.html',
  styleUrls: ['./search-connections.component.css']
})
export class SearchConnectionsComponent implements OnInit {
  titleSearch: string = "Search"; // Input field title and sets the icon in the input field
  query: string = ""; // variable updated from the input designiated input field and then used to update the temp User

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  // Capture user input from input field
  findUser($event:any){
    this.query = $event;
  }  

  finish(){
    this.router.navigate(['/feed']);
    console.log('finish adding connections')
  }

}
