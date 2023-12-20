import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private baseURL = "http://localhost:8080/categoria";
  constructor(private http: HttpClient) { }

  obtenerCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.baseURL}/all`)
  }

  agregarCategoria(nuevaCategoria: Categoria): Observable<Object>{
    return this.http.post(`${this.baseURL}/add`, nuevaCategoria);
  }

  verificarNombreExistente(nombre: string): Observable<boolean> {
    // Realizar una solicitud al servidor para verificar la existencia del nombre
    return this.http.get<boolean>(`${this.baseURL}/verificarNombre/${nombre}`);
  }

  eliminarCategoria(id: number): Observable<Object>{
    const url = `${this.baseURL}/delete/${id}`;
     return this.http.delete(url, { responseType: 'text' });
  }
  encontrarCategoria(id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/find/${id}`)
  }
  editarCategoria(id: number, categoria: Categoria):Observable<any>{
    return this.http.put(`${this.baseURL}/edit/${id}`,categoria);
  }
}
