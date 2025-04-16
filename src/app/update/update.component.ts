import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/residence';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  id!:any
  listupdaeRes=new Residence

    formadd!:FormGroup
   constructor(private act:ActivatedRoute,
    private resService:ResidenceService,
  private route:Router){}
  ngOnInit(): void {

   this.id= this.act.snapshot.params['name']
console.log(this.id)
this.formadd=new FormGroup({
  // id:new FormControl('',[Validators.required,Validators.pattern(/^[1-9][0-9]/)]),
   name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
   address:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern(/^[A-Z][a-z]/)]),
   image:new FormControl('',Validators.required),
   status:new FormControl('',[Validators.required,Validators.pattern(/^disponible+$/)]),

  })

  this.resService.getbyidresidence(this.id).subscribe((data)=>{
this.listupdaeRes=data

this.formadd.patchValue(this.listupdaeRes as any)
  })
 
  }

  //get id(){return this.formadd.get('id')}
  updateresidence(){
    this.resService.upadateresidence(this.id,this.formadd.value).subscribe(()=>{
this.route.navigate(['/residence'])
    })

  }
}
