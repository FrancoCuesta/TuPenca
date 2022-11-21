import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partido } from 'src/app/models/partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  
  constructor(private http: HttpClient) { }
  
  agregar(x : Partido) : Observable<Partido[]>{ 
    let apiUrl = "https://localhost:7220/api/Partidos";
    return this.http.post<Partido[]>(apiUrl,x);
  }
  listar() : Observable<Partido[]>{
    let apiUrl= "https://localhost:7220/api/Partidos";
    return this.http.get<Partido[]>(apiUrl);
  }
}
