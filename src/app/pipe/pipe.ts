import { Pipe, PipeTransform } from "@angular/core";
import { Producto } from "../models/producto";
@Pipe({
    name: "filtro"
})
export class FiltroPipe implements PipeTransform{
    transform(productos: Producto[], nombre: string): Producto[] {
        console.log(productos)
        
        if (!productos || !nombre){
            return productos
        }
        return productos.filter(producto =>
            producto.nombre.toLowerCase().includes(nombre.toLowerCase())
        )
    }


}