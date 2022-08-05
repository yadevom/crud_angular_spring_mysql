import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/core/models/empleado';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();

  constructor() { }

  ngOnInit(): void {
    console.log(this.empleado);
  }

  onSubmit() {
    console.log(this.empleado);
  }
}
