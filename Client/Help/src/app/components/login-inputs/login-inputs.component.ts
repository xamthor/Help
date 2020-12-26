import { Component, OnInit, Input} from '@angular/core';
import {faUser, faUnlockAlt, faEnvelope, faPhoneAlt, faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-inputs',
  templateUrl: './login-inputs.component.html',
  styleUrls: ['./login-inputs.component.css']
})
export class LoginInputsComponent implements OnInit {
  @Input() title!: string;
  faUser = faUser;
  faLock = faUnlockAlt;
  faEmail = faEnvelope
  faPhone = faPhoneAlt; 
  faSearch = faSearch;

  constructor() { }

  ngOnInit(){
  }
}
