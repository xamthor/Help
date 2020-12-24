import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-login-inputs',
  templateUrl: './login-inputs.component.html',
  styleUrls: ['./login-inputs.component.css']
})
export class LoginInputsComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(){
  }

}
