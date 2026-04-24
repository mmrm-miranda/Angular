import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { MiriamComponent } from './pages/miriam/miriam.component';
import { Miriam2Component } from './pages/miriam2/miriam2.component';
import { Miriam3Component } from './pages/miriam3/miriam3.component';
import { MusicaComponent } from './pages/musica/musica.component';
import { FormuarioComponent } from './pages/formuario/formuario.component';
import { ComparaComponent } from './pages/compara/compara.component';
import { ComunicacionComponent } from './pages/comunicacion/comunicacion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CargaCSV1Component } from './pages/carga-csv1/carga-csv1.component';
import { CargaCSV2Component } from './pages/carga-csv2/carga-csv2.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '',pathMatch: 'full',redirectTo: 'home'},
  {path: 'me', component: MiriamComponent},
  {path: 'tu', component: Miriam2Component},
  {path: 'yo', component: Miriam3Component},
  {path: 'musica', component:MusicaComponent},
  { path: 'form', component: FormuarioComponent },
  {path: 'compara', component:ComparaComponent},
  {path: 'comuni', component:ComunicacionComponent},
  {path: 'csv1', component:CargaCSV1Component},
  {path: 'csv2', component:CargaCSV2Component},
  {path: 'inicio', component:InicioComponent},
  { path: '**', component: NotFoundComponent },
 

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
