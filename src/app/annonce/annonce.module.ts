import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceComponent } from './annonce.component';
import { ListannonceComponent } from './listannonce/listannonce.component';
import { AnnonceRoutingModule } from './annonce-routing.module';



@NgModule({
  declarations: [
    AnnonceComponent,
    ListannonceComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ]
})
export class AnnonceModule { }
