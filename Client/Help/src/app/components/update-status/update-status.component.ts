import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {
  titleEmotion: string = "How do you feel?"; // Input field title and sets the icon in the input field
  content:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // Capture user input from input field
  getContent($event:any){
    this.content = $event;
  }


  updateStatus(){
    this.router.navigate(['/feed']);
  }

}
