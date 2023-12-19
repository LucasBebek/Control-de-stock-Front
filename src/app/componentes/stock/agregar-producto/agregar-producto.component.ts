import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit{
    producto!: Producto 
    categorias : Categoria[] = [];
    
    constructor(private categoriaService: CategoriaService){}

    ngOnInit(): void {
      this.obtenerLasCategorias();
    }

    private obtenerLasCategorias(){
      this.categoriaService.obtenerCategorias().subscribe(res =>{
        this.categorias = res;
        
      })
    }

}