import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  productos : Producto [] = [];
  producto: Producto = new Producto(0,'',0,0,0); 
  categorias : Categoria[] = [];
  selectedCategoryId!: number;
  idSeleccionado!:number;

  constructor(
    private categoriaService: CategoriaService,
    private productoService: ProductoService, 
    private route: ActivatedRoute,
    private router: Router){}
 
  ngOnInit(): void {
      this.obtenerLasCategorias();
      this.route.params.subscribe(params => {
        this.idSeleccionado = params['id'];
        console.log(this.idSeleccionado)
        this.encontrarProducto(this.idSeleccionado);
      });
      
    }
    
    
    private obtenerLasCategorias(){
    this.categoriaService.obtenerCategorias().subscribe(res =>{
      this.categorias = res;
      
    })
  }
  //para que aparezcan los campos ya rellenados con los valores que tiene 
  encontrarProducto(id: number){
    this.productoService.encontrarProducto(id).subscribe(producto =>{
         this.producto = producto
     })
  }
  editarProducto(id: number, producto:Producto){
    this.productoService.editarProducto(id,producto).subscribe(productoModificado=>{
      
      this.producto=productoModificado
      this.router.navigate(['']);
    })
  }
  
}
