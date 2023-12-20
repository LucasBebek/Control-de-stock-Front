import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent implements OnInit{
  categoria:Categoria = new Categoria(0,'');   

  constructor(private router:Router, private categoriaService: CategoriaService){}
  ngOnInit(): void {
      
  }
   
  agregarUnaCategoria(categoria:Categoria){
      if(this.categoria.nombre_categoria){
         this.categoriaService.agregarCategoria(categoria).subscribe((respuesta)=>{
          console.log('Categoria agregada exitosamente', respuesta);
          this.router.navigate(['']);
         })
      }else{
        alert("Rellene el campo de nombre");
      }
  }
}
