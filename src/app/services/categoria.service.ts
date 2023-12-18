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
}
