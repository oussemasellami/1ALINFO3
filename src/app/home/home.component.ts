import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// interpolation
  name="bonjour 4 Alinfo 3"

  //proprty
   prop=true

   //event binding
   show(){
    console.log('event binding!!!!')
   }

   //to-way databinding
   nametest="bonjour"

}
