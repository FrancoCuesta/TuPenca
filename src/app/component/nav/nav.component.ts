import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  token = localStorage.getItem('token');
  rol = localStorage.getItem('rol');
  constructor(private router:Router,private api:LoginService) {
   }

  ngOnInit(): void {
  }

  logout(){
    console.log(this.rol);
    console.log(this.token);
    localStorage.clear();
    this.token = localStorage.getItem('token');
    console.log(this.rol);
    console.log(this.token);
    this.router.navigate(['/']);
  }
  
  public login(x:Login) {
    this.api.Login(x).subscribe(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('token_expiration', data.expiration);
      this.api.user(data.email).subscribe(data => {
        data.roles.forEach(element => {
          localStorage.setItem('rol', element);
          localStorage.setItem('email', data.email);
        });
        location.reload();
      });
    });
    this.router.navigate(['/']);
  }

}

