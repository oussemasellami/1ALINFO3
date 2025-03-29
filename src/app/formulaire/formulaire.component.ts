import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {


  formadd!:FormGroup

  ngOnInit(): void {
   this.formadd=new FormGroup({
    id:new FormControl('',[Validators.required,Validators.pattern(/^[1-9][0-9]/)]),
    name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    address:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern(/^[A-Z][a-z]/)]),
    image:new FormControl('',Validators.required),
    status:new FormControl('',[Validators.required,Validators.pattern(/^disponible+$/)]),

   })
  }

  get id(){return this.formadd.get('id')}

  addresidence(){
    console.log('notre residence : '+JSON.stringify(this.formadd.value))
  }

}
