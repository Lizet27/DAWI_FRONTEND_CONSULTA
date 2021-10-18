import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

const baseURL="http://localhost:8190/rest/producto"

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  registroProducto(data:Producto):Observable<any>{
    return this.http.post(baseURL,data);

  }


}
