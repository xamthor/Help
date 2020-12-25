import { Component, OnInit, Input} from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-login-inputs',
  templateUrl: './login-inputs.component.html',
  styleUrls: ['./login-inputs.component.css']
})
export class LoginInputsComponent implements OnInit {
  @Input() title!: string
  faUser = faUser;

  constructor() { }

  ngOnInit(){
  }

}
