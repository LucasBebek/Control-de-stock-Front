import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './componentes/stock/stock.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarProductoComponent } from './componentes/stock/agregar-producto/agregar-producto.component';
import { FormsModule } from '@angular/forms';
import { EditarProductoComponent } from './componentes/stock/editar-producto/editar-producto.component';
import { AgregarCategoriaComponent } from './componentes/categorias/agregar-categoria/agregar-categoria.component';
import { EditarCategoriaComponent } from './componentes/categorias/editar-categoria/editar-categoria.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { FiltroPipe } from './pipe/pipe';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    AgregarCategoriaComponent,
    EditarCategoriaComponent,
    CategoriasComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
