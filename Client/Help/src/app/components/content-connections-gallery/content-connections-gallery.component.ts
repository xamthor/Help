import { Component, OnInit } from '@angular/core';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content-connections-gallery',
  templateUrl: './content-connections-gallery.component.html',
  styleUrls: ['./content-connections-gallery.component.css']
})
export class ContentConnectionsGalleryComponent implements OnInit {
  profilePic = faUserCircle;
  arrayOfProfiles = [
    {name: "Jen Turner", lastMessageTime:"23"},
    {name: "Jake Stafford", lastMessageTime:"26"},
    {name: "Katie Drake", lastMessageTime:"32"},
    {name: "Joe McCarty", lastMessageTime:"40"},
    {name: "Charlie Patterson", lastMessageTime:"48"},
    {name: "James Bond"},
    {name: "Daisy Watson"},
    {name: "Tommy Drake"},
    {name: "Bacari White"},
    {name: "Maranida Watson"},
    {name: "Nate Stokes"},
    {name: "Sean Wilson"},
    {name: "Paul Malon"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
