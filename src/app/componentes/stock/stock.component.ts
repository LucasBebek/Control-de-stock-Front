import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit{
    
    productos : Producto [] = [];
    categorias : Categoria[] = [];
    datoBuscado=''
    
    constructor(private productoService: ProductoService,private categoriaService: CategoriaService){}

    ngOnInit(){
        this.obtenerLasCategorias();
        this.obtenerLosProductos();
    }
    
    private obtenerLasCategorias(){
      this.categoriaService.obtenerCategorias().subscribe(res =>{
        this.categorias = res;
       
      })
    }
    
    eliminarProducto(id:number){
      this.productoService.eliminarProducto(id).subscribe(res =>{
           console.log(res);
           this.obtenerLosProductos();
           
      })
    }
    obtenerLosProductos(){
      this.productoService.obtenerProductos().subscribe(res =>{
        this.productos = res;
        
      });
    }
}
