import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogosComponent } from './logos/logos.component';
import { GuiaComponent } from './guia/guia.component';

const routes: Routes = [  { path:'', redirectTo: 'guia', pathMatch:'full' },
{ path: 'guia', component:GuiaComponent},
{ path: 'logos', component:LogosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
