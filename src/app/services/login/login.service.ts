import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from '../../models/login';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  Login(x:Login){
    let url = 'https://localhost:7220/api/Auth/Login';
    let ret = this.http.post<returned>(url,x);
    return ret;
  } 
  user(x:string){
    let url = 'https://localhost:7220/api/Auth/GetUsuario?username='+x;
    let ret = this.http.get<returned>(url);
    return ret;
  }
  register(x:Login){
    let url = 'https://localhost:7220/api/Auth/Register';
    let ret = this.http.post<returned>(url,x);
    return ret;
  }
  
}

interface  returned{
  statusOk: true,
  statusMessage: string,
  idUsuario: string,
  token: string,
  expirationMinutes: 0,
  nombre: string,
  email: string,
  expiration: string,
  roles: string[]
}
