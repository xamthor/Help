import { Component, OnInit } from '@angular/core';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content-messages-gallery',
  templateUrl: './content-messages-gallery.component.html',
  styleUrls: ['./content-messages-gallery.component.css']
})
export class ContentMessagesGalleryComponent implements OnInit {
  profilePic = faUserCircle;
  arrayOfProfiles = [
    {name: "Jen Turner", lastMessageTime:"23"},
    {name: "Jake Stafford", lastMessageTime:"26"},
    {name: "Katie Drake", lastMessageTime:"32"},
    {name: "Joe McCarty", lastMessageTime:"40"},
    {name: "Charlie Patterson", lastMessageTime:"48"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
