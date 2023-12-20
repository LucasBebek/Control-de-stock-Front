import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './componentes/stock/stock.component';
import { AgregarProductoComponent } from './componentes/stock/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './componentes/stock/editar-producto/editar-producto.component';

const routes: Routes = [
  {path: '', component: StockComponent},
  {path: 'add', component: AgregarProductoComponent},
  {path: 'edit/:id', component: EditarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
