import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../models/consulta.model';

const baseUrl ='http://localhost:8190/rest/consulta'

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  create(data:Consulta):Observable<any>{
    return this.http.post(baseUrl,data);
  }
}
