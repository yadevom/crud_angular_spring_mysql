import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './modules/empleados/components/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './modules/empleados/components/registrar-empleado/registrar-empleado.component';

const routes: Routes = [
  {path: 'empleados', component:ListaEmpleadosComponent},
  {path: 'registrar-empleado', component:RegistrarEmpleadoComponent},
  {path: '', redirectTo:'empleados', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
