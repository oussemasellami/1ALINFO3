import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { UpdateComponent } from './update/update.component';



const r:Routes=[
{path:"",redirectTo:"residence",pathMatch:"full"},
  {path:"home" ,component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  {path:"addresidence",component:FormulaireComponent},
  {path:"updateresidence/:name",component:UpdateComponent},
 // {path:"**",component:NotfoundComponent}
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(r),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
