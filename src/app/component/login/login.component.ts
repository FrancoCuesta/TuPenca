import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Login} from '../../models/login';
import {Router} from '@angular/router';
import {NavComponent} from '../nav/nav.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formlogin = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  
  constructor( private api:LoginService,private router:Router ) { }

  login() {
      let x: Login={
        password: this.formlogin.controls["password"].value,
        username: this.formlogin.controls["username"].value
      }
    }
    //this.nanv.login(x);
}
