import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from '../../models/login';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  url = 'https://localhost:7220/api/Auth/Login';
  Login(x:Login){
    let ret = this.http.post<returned>(this.url,x);
    console.log(x);
    console.log(ret);
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
  expiration: "2022-11-19T21:36:21.646Z"
}
