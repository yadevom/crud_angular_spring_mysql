import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/core/models/empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();

  constructor(
    private empleadoServicio:EmpleadoService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  
  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      this.irListaEmpleados();
    },
      error => console.log(error)
    );
  }

  irListaEmpleados() {
    this.router.navigate(['/empleados']);
  }

  onSubmit() {
    this.guardarEmpleado();
  }
}
