import { Component, OnInit } from '@angular/core';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content-emotion-gallery',
  templateUrl: './content-emotion-gallery.component.html',
  styleUrls: ['./content-emotion-gallery.component.css']
})
export class ContentEmotionGalleryComponent implements OnInit {
  profilePic = faUserCircle;
  arrayOfProfiles = [
    {name: "James Bond"},
    {name: "Daisy Watson"},
    {name: "Tommy Drake"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
