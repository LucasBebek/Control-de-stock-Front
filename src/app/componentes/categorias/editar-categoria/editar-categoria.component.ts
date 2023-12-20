import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit{
    categoria:Categoria = new Categoria(0,'');
    idSeleccionado!:number;

    constructor(
      private router: Router, 
      private categoriaService:CategoriaService,
      private route:ActivatedRoute){}
  
       ngOnInit(){
        this.route.params.subscribe(params =>{
          this.idSeleccionado = params ['id'];
          console.log(this.idSeleccionado)
          this.encontrarLaCategoria(this.idSeleccionado);
        })
        
  }

  encontrarLaCategoria(id: number){
    this.categoriaService.encontrarCategoria(id).subscribe(categoria =>{
      this.categoria = categoria
    })
  }
  editarLaCategoria(id: number, categoria:Categoria){
    this.categoriaService.editarCategoria(id,categoria).subscribe(categoriaModificada =>{
      this.categoria = categoriaModificada
      this.router.navigate(['']);
    })
  }

}
