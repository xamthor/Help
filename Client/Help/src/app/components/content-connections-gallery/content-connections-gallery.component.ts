import { Component, OnInit } from '@angular/core';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {UserAccountService} from '../../services/user-account.service';

@Component({
  selector: 'app-content-connections-gallery',
  templateUrl: './content-connections-gallery.component.html',
  styleUrls: ['./content-connections-gallery.component.css']
})
export class ContentConnectionsGalleryComponent implements OnInit {
  profilePic = faUserCircle;
  arrayOfProfiles = this.userAccountService.getConnections();

  constructor(private userAccountService: UserAccountService) { }

  ngOnInit(): void {
  }

}
