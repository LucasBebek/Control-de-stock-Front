import { Component, OnInit } from "@angular/core";
import { Categoria } from "src/app/models/categoria";
import { CategoriaService } from "src/app/services/categoria.service";

@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.component.html',
    styleUrls: ['./categorias.component.css']
  })
  export class CategoriasComponent implements OnInit{
     categorias : Categoria[]=[];

     constructor(private categoriaService:CategoriaService){}
  ngOnInit(){
    this.obtenerLasCategorias();
  }

  eliminarCategoria(id:number){
    this.categoriaService.eliminarCategoria(id).subscribe(res =>{
      console.log(res);
      this.obtenerLasCategorias();
    })
  }
  private obtenerLasCategorias(){
    this.categoriaService.obtenerCategorias().subscribe(res =>{
      this.categorias = res;
     console.log(this.categorias)
    })
  }

}