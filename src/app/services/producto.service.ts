import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseURL = "http://localhost:8080/producto";
  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseURL}/all`)
  }

  agregarProducto(nuevoProducto : Producto): Observable<object>{
        return this.http.post(`${this.baseURL}/add`, nuevoProducto);
  }
}
