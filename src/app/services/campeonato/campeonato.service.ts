import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campeonato } from 'src/app/models/campeonato';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  constructor(private http: HttpClient) { }

  agregar(x : Campeonato) : Observable<Campeonato[]>{
    let apiUrl = "https://localhost:7220/api/Campeonatos";
    return this.http.post<Campeonato[]>(apiUrl,x);
  }

  listar() : Observable<Campeonato[]>{
    let apiUrl = "https://localhost:7220/api/Campeonatos";
    return this.http.get<Campeonato[]>(apiUrl);
  }

}
