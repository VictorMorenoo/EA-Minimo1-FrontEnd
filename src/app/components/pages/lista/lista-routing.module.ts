import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listaComponent } from './lista.component';

const routes: Routes = [{ path: '', component: listaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class listaRoutingModule { }
