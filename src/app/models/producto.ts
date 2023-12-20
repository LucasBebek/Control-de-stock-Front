

export class Producto{
         id: number;
         nombre: string;
         precio: number;
         
         stock: number;
         categoria_id: number;
    
    constructor(
         id: number,
        nombre: string,
        precio: number,
        
        stock: number,
        categoria_id: number
        ){
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
           
            this.stock = stock;
            this.categoria_id = categoria_id;
        }
}