import { Categoria } from "./categoria";

export class Producto{
    constructor(
        public id: number,
        public nombre: string,
        public precio: number,
        public precio_unitario: number,
        public stock: number,
        public categoria_name: String
    ){}
}