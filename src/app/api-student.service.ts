import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentService {
  apiUrl='https://631327f4a8d3f673ffc55a53.mockapi.io/student';
  constructor(private __http:HttpClient) {

   }

   getAllStudent(){
    return this.__http.get(this.apiUrl);
   };

   getStudentById(id:any){
    return this.__http.get(this.apiUrl+'/'+id);
   };

   delete(id:any){
    return this.__http.delete(this.apiUrl+'/'+id);
   };

   insert(form:any){
    return this.__http.post(this.apiUrl,form);
   }

   edit(id:any,form:any){ 
    return this.__http.put(this.apiUrl+'/'+id,form);
   }
}
