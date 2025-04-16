import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/core/models/residence';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit{

searchname=""
listfavoris:Residence[]=[]

listServiceResidence:Residence[]=[]

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/residence1.jpg", status: "Disponible"},
     {id:2,"name": "El fel", "address":"Ezzahra","image":"../../assets/images/residence2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/residence3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/residence3.jpg", status: "En Construction"}
   ];
 
   constructor(private residenceService:ResidenceService){}
  ngOnInit(): void {
    this.residenceService.getresidence().subscribe((data)=>{
this.listServiceResidence=data
console.log(this.listServiceResidence)
    })
   
  }


   showlocation(res:Residence){
    if(res.address==="inconnu"){
      alert(`adress est ${res.address} est inconu`)
    }else{
      alert(`adress est ${res.address} est ${res.name}`)
    }

   }

   searchbyname(){
    return this.listServiceResidence.filter(r=>r.name.toLowerCase().includes(this.searchname.toLowerCase()))
   }

   addtofavorie(res:Residence){

    const index =this.listfavoris.findIndex(r=>r.id==res.id)
    if( index >-1){
this.listfavoris.splice(index,1)
    }else{
      this.listfavoris.push(res)
      console.log('liste favorie: '+JSON.stringify(this.listfavoris))
    }

   }

   isliked(res:Residence){
    return this.listfavoris.some(r=>r.id==res.id)
   }

   a!:number
   getcountNumber(){
    return this.a=this.residenceService.getNumber(this.listResidences,"name","El fel")
   }

   deleteResidence(id:any){
    this.residenceService.deleteresidence(id).subscribe(()=>{
      console.log('deleted!!!!!!')
      this.ngOnInit()
    })
   }
}
