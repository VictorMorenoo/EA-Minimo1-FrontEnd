import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
{path:'',redirectTo:'home',pathMatch:'full'},
{ path: 'register', loadChildren: () => import('./components/pages/register/register.module').then(m => m.RegisterModule) },
{ path: 'lista', loadChildren: () => import('./components/pages/lista/lista.module').then(m => m.listaModule) }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
