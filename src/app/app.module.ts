import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddConsultaComponent } from './components/add-consulta/add-consulta.component';

import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { AddCategoriaComponent } from './components/add-categoria/add-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    AddConsultaComponent,
    AddProductoComponent,
    AddCategoriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
