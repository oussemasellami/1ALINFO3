import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';



const r:Routes=[
{path:"",redirectTo:"residence",pathMatch:"full"},
  {path:"home" ,component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
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
