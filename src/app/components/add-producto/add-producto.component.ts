import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';


import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  lstCategoria: Categoria[] =[];

  producto : Producto={
    categoria:{
      idcategoria:0
    }
  }

  

  constructor(private categoriaService:CategoriaService, 
    private productoService:ProductoService) { 
    this.categoriaService.listaCategoria().subscribe(
      categorias => this.lstCategoria =categorias
    );
  }

  registraProducto(){
    console.log(this.producto); 
    this.productoService.registroProducto(this.producto).subscribe(
      response =>{
        console.log(response.mensaje);
        alert(response.mensaje);
      },
      error =>{
        console.log(error);
      },

    );
  }

  ngOnInit(): void {
  }

}
