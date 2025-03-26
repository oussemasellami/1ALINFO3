import { Component } from '@angular/core';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {

searchname=""

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/residence1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/residence2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/residence3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/residence3.jpg", status: "En Construction"}
   ];
 
   showlocation(res:Residence){
    if(res.address==="inconnu"){
      alert(`adress est ${res.address} est inconu`)
    }else{
      alert(`adress est ${res.address} est ${res.name}`)
    }

   }

   searchbyname(){
    return this.listResidences.filter(r=>r.name.toLowerCase().includes(this.searchname.toLowerCase()))
   }
}
