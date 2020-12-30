import { Component, OnInit } from '@angular/core';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content-top-five',
  templateUrl: './content-top-five.component.html',
  styleUrls: ['./content-top-five.component.css']
})
export class ContentTopFiveComponent implements OnInit {
  profilePic = faUserCircle;
  arrayOfProfiles = [
    {firstName: "Katie"},
    {firstName: "Jen"},
    {firstName: "Joe"},
    {firstName: "Charlie"},
    {firstName: "Jake"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
