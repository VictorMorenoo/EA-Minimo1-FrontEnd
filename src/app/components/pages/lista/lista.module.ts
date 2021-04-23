import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { listaRoutingModule } from './lista-routing.module';
import { listaComponent } from './lista.component';


@NgModule({
  declarations: [listaComponent],
  imports: [
    CommonModule,
    listaRoutingModule
  ]
})
export class listaModule { }
