import { Component, OnInit } from '@angular/core';
import {faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {
  profilePic = faUserCircle;
  menu = faBars;
  firstName: string = "JC";

  constructor() { }

  ngOnInit(): void {
  }

}
