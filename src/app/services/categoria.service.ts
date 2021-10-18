import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';


const baseURL= 'http://localhost:8190/url/lista';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }
  
  listaCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(baseURL+"/listaCategoria");
  }

 
}
