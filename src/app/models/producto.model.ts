import { Byte } from "@angular/compiler/src/util";
import { Categoria } from "./categoria.model";



export class Producto {
  idproducto?: number;
  nombre?: string;
  categoria?: Categoria;
  precio?: number;
  autor?: string;
  foto1?: bigint;
  descripcion?: string
}
