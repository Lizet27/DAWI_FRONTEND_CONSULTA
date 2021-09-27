import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/models/consulta.model';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-add-consulta',
  templateUrl: './add-consulta.component.html',
  styleUrls: ['./add-consulta.component.css']
})
export class AddConsultaComponent implements OnInit {

  constructor(private consultaService:ConsultaService) { }

  consulta: Consulta={}

  guardarConsulta(){
    console.log(">> consulta ");
    console.log(this.consulta);

    this.consultaService.create(this.consulta).subscribe(
      response =>{
        console.log(response.mensaje);
        alert(response.mensaje)},
        error =>{
          console.log(error);
        },
    );
  }

  ngOnInit(): void {
  }

}
