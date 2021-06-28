// Importaciones de Modulos propios de Angular//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos de la aplicación
import { AuthRoutingModule } from './auth-routing.module';

// Importaciones de componentes
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
