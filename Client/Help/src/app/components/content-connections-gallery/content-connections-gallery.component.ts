import { Component, OnInit } from '@angular/core';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {ConnectionsService} from '../../services/connections.service';
import {faPlus, faStar} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-connections-gallery',
  templateUrl: './content-connections-gallery.component.html',
  styleUrls: ['./content-connections-gallery.component.css']
})
export class ContentConnectionsGalleryComponent implements OnInit {
  dummyData = [
    {name:"bob"},
    {name: "Maria"},
    {name: "Pricialla"},
  ]
  faPlus = faPlus;
  star = faStar;
  profilePic = faUserCircle;
  //arrayOfProfiles = this.dummyData;
  arrayOfProfiles :any[]= [];

  constructor(private connectionsService:ConnectionsService , private router:Router) { }

  ngOnInit(): void {
    this.connectionsService.getAllConnections().subscribe(data => {
      this.arrayOfProfiles = data;
      console.log(data);
    })
  }

  addToTopFive(connectionId: string, star: boolean){
    if(star){
      console.log(`Remove from Top Five ${connectionId} because the star is ${star}`); // TESTING
      this.connectionsService.removeConnectionTopFive(connectionId).subscribe(data => {
        console.log(data); //Testing
        
      })
    }else{
      this.connectionsService.addConnectionTopFive(connectionId).subscribe(data => {
        console.log(data); //Testing
        
      })
      console.log(`Add to Top Five ${connectionId} because the star is ${star}`); // TESTING
    }
    
  }

  goToSearchConnectionsPage(){
    this.router.navigate(['/search-connections']); // Redirect the user to search connections's screen 
  }

}
