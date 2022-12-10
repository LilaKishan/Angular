import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  data:Student[] =[];
  constructor(private __api:ApiStudentService){
  }

  ngOnInit(){
    this.__api.getAllStudent().subscribe((res:any)=>{
      this.data=res;
      console.log(this.data);
      
    })
  }
}
