import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Premio } from 'src/app/models/Premio';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  constructor(private http: HttpClient) { }

  get():Observable<Premio[]>{
    let  apiUrl = 'https://localhost:7220/api/Premios';
    return this.http.get<Premio[]>(apiUrl);
  }
  getPremios():Observable<Premio[]>{
    let  apiUrl = 'https://localhost:7220/api/Premios/getUsuario/'+localStorage.getItem("email");
    return this.http.get<Premio[]>(apiUrl);
  }

  eliminar(id : number|null):Observable<Premio>{
    let  apiUrl = 'https://localhost:7220/api/Premios/'+id;
    return this.http.delete<Premio>(apiUrl);
  }

  cobrar(id : number|null , cuenta:string|null):Observable<Premio>{
    let  apiUrl = 'https://localhost:7220/api/Premios/cuenta';
    return this.http.put<Premio>(apiUrl,
      {
        "id": id,
        "descripcion": "string",
        "monto": 0,
        "estado": true,
        "userId": "string",
        "pencaId": 0,
        "cuenta": cuenta
      }
      );
  }
}