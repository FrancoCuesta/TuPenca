import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Predicsion } from '../../models/Predicsion';

@Injectable({
  providedIn: 'root'
})
export class PredicsionService {

  constructor(private http: HttpClient) { }

  SetPrediccion(x: Predicsion):Observable<Predicsion>  {
    let apiUrl = "https://localhost:7220/api/Predicsion";
    return this.http.post<Predicsion>(apiUrl, x);
  }

}
