import { Component, OnInit } from '@angular/core';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {UserAccountService} from '../../services/user-account.service';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
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
  profilePic = faUserCircle;
  arrayOfProfiles = this.dummyData;

  constructor(private userAccountService:UserAccountService , private router:Router) { }

  ngOnInit(): void {
  }

  goToSearchConnectionsPage(){
    this.router.navigate(['/search-connections']); // Redirect the user to search connections's screen 
  }

}
