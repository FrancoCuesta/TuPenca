import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Penca } from '../../models/penca';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PencaService {
  constructor(private http: HttpClient) { }

  agregar(penca: Penca): Observable<Penca> {
    let apiUrl = "https://localhost:7220/api/Penca";
    return this.http.post<Penca>(apiUrl, penca);
  }

  listarPublicas() : Observable<Penca[]>{
    let apiUrl = "https://localhost:7220/api/Penca/GetPencasPublica";
    return this.http.get<Penca[]>(apiUrl);
  }

  listarMisPenca() : Observable<Penca[]>{
    let apiUrl = "https://localhost:7220/api/Penca/GetPencasPrivada/"+localStorage.getItem('userId');
    return this.http.get<Penca[]>(apiUrl);
  }
}