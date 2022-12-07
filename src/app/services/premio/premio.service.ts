import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Premio } from 'src/app/models/Premio';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  constructor(private http: HttpClient) { }

  getPremios():Observable<Premio[]>{
    let  apiUrl = "https://localhost:7220/api/Premio";
    return this.http.get<Premio[]>(apiUrl);
  }
}
