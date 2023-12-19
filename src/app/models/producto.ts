

export class Producto{
         id: number;
         nombre: string;
         precio: number;
         
         stock: number;
         categoria_name: String;
    
    constructor(
         id: number,
        nombre: string,
        precio: number,
        
        stock: number,
        categoria_name: String
        ){
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
           
            this.stock = stock;
            this.categoria_name = categoria_name;
        }
}