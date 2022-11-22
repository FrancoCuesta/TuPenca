import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Login} from '../../models/login';
import {Router} from '@angular/router';
import {NavComponent} from '../nav/nav.component';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  nanv:NavComponent = new NavComponent (this.router,this.api);
  token = localStorage.getItem('token');

  formlogin = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  
  constructor( private api:LoginService,private router:Router ) { }

  login() {
      let x: Login={
        username: this.formlogin.controls["username"].value,
        password: this.formlogin.controls["password"].value,
      }
      this.nanv.login(x);
    }
}
