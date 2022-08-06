import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

import { Empleado } from 'src/app/core/models/empleado';
import { EmpleadoService } from '../../services/empleado.service';

import swal from 'sweetalert2';
@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  id:number;
  empleado:Empleado = new Empleado;

  constructor(
    private empleadoService:EmpleadoService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
    },
    error => console.log(error)
    );
  }

  irListaEmpleados() {
    this.router.navigate(['/empleados']);
    swal('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit() {
    this.empleadoService.actualizarEmpleado(
      this.id,
      this.empleado
      ).subscribe(dato => {
        this.irListaEmpleados();
      },
      error => console.log(error)
      );
  }

}
