import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit{
    producto: Producto = new Producto(0,'',0,0,0); 
    categorias : Categoria[] = [];
    selectedCategoryId!: number;
    

    constructor(private router:Router, private categoriaService: CategoriaService, private productoService: ProductoService){}

    ngOnInit(): void {
      this.obtenerLasCategorias();
    }
  
    private obtenerLasCategorias(){
      this.categoriaService.obtenerCategorias().subscribe(res =>{
        this.categorias = res;
        
      })
    }
    
    agregarUnProducto(producto: Producto) {
      this.producto.categoria_id = this.selectedCategoryId;
  
      // Verificar si el nombre del producto ya existe
      this.productoService.verificarNombreExistente(producto.nombre).subscribe((existe: boolean) => {
          if (existe) {
              alert("El nombre del producto ya existe. Por favor, elija un nombre diferente.");
          } else {
              console.log(this.producto.nombre, this.producto.precio, this.producto.categoria_id);
  
              if (this.producto.nombre && this.producto.precio && this.producto.categoria_id) {
                  this.productoService.agregarProducto(producto).subscribe((respuesta) => {
                      console.log(respuesta)
                    alert('Producto guardado exitosamente: ' + producto.nombre);
                      this.router.navigate(['']);
                  });
              } else {
                  alert("Complete todos los campos");
              }
          }
      });
  }
}