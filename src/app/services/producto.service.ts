import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, ObservedValueOf } from "rxjs";
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseURL = "http://localhost:8080/producto";
  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseURL}/all`)
  }

  agregarProducto(nuevoProducto : Producto): Observable<Object>{
      return this.http.post(`${this.baseURL}/add`, nuevoProducto);
  }

  verificarNombreExistente(nombre: string): Observable<boolean> {
    // Realizar una solicitud al servidor para verificar la existencia del nombre
    return this.http.get<boolean>(`${this.baseURL}/verificarNombre/${nombre}`);
  }
  eliminarProducto(id: number):Observable<Object>{
    const url = `${this.baseURL}/delete/${id}`;
     return this.http.delete(url, { responseType: 'text' });
     
  }
  encontrarProducto(id: number):Observable<any>{
        return this.http.get(`${this.baseURL}/find/${id}`)
  }

  editarProducto(id: number, producto: Producto):Observable<any>{
    return this.http.put(`${this.baseURL}/edit/${id}`,producto);
  }
}
