import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { MiriamComponent } from './pages/miriam/miriam.component';
import { Miriam2Component } from './pages/miriam2/miriam2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Miriam3Component } from './pages/miriam3/miriam3.component';
import { MusicaComponent } from './pages/musica/musica.component';
import { FormuarioComponent } from './pages/formuario/formuario.component';
import { ComunicacionComponent } from './pages/comunicacion/comunicacion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CargaCSV1Component } from './pages/carga-csv1/carga-csv1.component';
import { CargaCSV2Component } from './pages/carga-csv2/carga-csv2.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    MiriamComponent,
    Miriam2Component,
    Miriam3Component,
    MusicaComponent,
    FormuarioComponent,
    ComunicacionComponent,
    InicioComponent,
    CargaCSV1Component,
    CargaCSV2Component,
  ],
  imports: [
    CommonModule, BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
