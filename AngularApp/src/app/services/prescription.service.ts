import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from '../appdata/Patient';
import { Pres} from '../appdata/Pres';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(
    public _http:HttpClient,
    public router:Router
   ) {
    
   }

   addPrescription(data:any){
     return this._http.post<any>("http://localhost:3000/add-Prescription", data);
   }
   prescriptionImage(id:string,image:any){

    return this._http.post<any>("http://localhost:3000/prescription/"+id+"/uploadPhoto", image);
  }
  getAllPrescription():Observable<Pres[]>{
    return this._http.get<Pres[]>("http://localhost:3000/get-all-prescription");
  
  }
  getsinglePrescription(id:string){
    return this._http.get<any>("http://localhost:3000/getsingleprescription/"+id);
  }
}