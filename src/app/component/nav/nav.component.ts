import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  token = localStorage.getItem('token');
  constructor(private router:Router,private api:LoginService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.token = localStorage.getItem('token');
    console.log(this.token);
    this.router.navigate(['/']);
  }
  
  public login(x:Login) {
    this.api.Login(x).subscribe(data => {
      console.log(data.token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('token_expiration', data.expiration);
      localStorage.setItem('idUsuario', data.idUsuario);
      location.reload();
    });
    this.router.navigate(['/']);
  }

}

