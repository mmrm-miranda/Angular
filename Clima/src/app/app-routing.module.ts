import { Component, NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { routes } from './app.routes';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }
