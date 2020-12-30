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
    {name: "James Bond", lastMessageTime:"48"},
    {name: "Daisy Watson", lastMessageTime:"49"},
    {name: "Tommy Drake", lastMessageTime:"48"},
    {name: "Bacari White", lastMessageTime:"48"},
    {name: "Maranida Watson", lastMessageTime:"48"},
    {name: "Nate Stokes", lastMessageTime:"48"},
    {name: "Sean Wilson", lastMessageTime:"48"},
    {name: "Paul Malon", lastMessageTime:"48"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
