import { Component, OnInit } from '@angular/core';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content-messages-gallery',
  templateUrl: './content-messages-gallery.component.html',
  styleUrls: ['./content-messages-gallery.component.css']
})
export class ContentMessagesGalleryComponent implements OnInit {
  profilePic = faUserCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
