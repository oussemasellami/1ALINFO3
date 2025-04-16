import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
urlResidence='http://localhost:3000/residence'
  constructor(private  http:HttpClient) { }

getNumber(list:any,crt:any,value:any){
let n=0
  for(let i in list){
    if(list[i][crt]==value){
      n++
    }
  }
  return n
}

getresidence():Observable<Residence[]>{
return this.http.get<Residence[]>(this.urlResidence)
}
getbyidresidence(id:any):Observable<Residence>{
  return this.http.get<Residence>(this.urlResidence+'/'+id)
  }
addresidence(res:Residence):Observable<Residence>{
    return this.http.post<Residence>('http://localhost:3000/residence',res)
    }

deleteresidence(id:any):Observable<Residence>{
      return this.http.delete<Residence>('http://localhost:3000/residence'+'/'+id)
      }
upadateresidence(id:any,res:Residence):Observable<Residence>{
    return this.http.put<Residence>('http://localhost:3000/residence'+'/'+id,res)
      }

}
