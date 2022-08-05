import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/core/models/empleado';
import { EmpleadoService } from '../../services/empleado.service';


@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})

export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];

  constructor(private empleadoServicio:EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();    
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    })
  }
}

