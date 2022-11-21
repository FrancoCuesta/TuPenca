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
    return this.http.post<returned>(this.url, {"username":x.username,"password":x.password})
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
