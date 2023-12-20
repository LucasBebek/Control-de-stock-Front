import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './componentes/stock/stock.component';
import { AgregarProductoComponent } from './componentes/stock/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './componentes/stock/editar-producto/editar-producto.component';
import { AgregarCategoriaComponent } from './componentes/categorias/agregar-categoria/agregar-categoria.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { EditarCategoriaComponent } from './componentes/categorias/editar-categoria/editar-categoria.component';

const routes: Routes = [
  {path: '', component: StockComponent},
  {path: 'add', component: AgregarProductoComponent},
  {path: 'edit/:id', component: EditarProductoComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'addCategoria', component: AgregarCategoriaComponent},
  {path: 'editCategoria/:id', component: EditarCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
