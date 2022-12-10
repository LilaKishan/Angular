import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  data:Student =new Student();
  id=0;
  constructor(private __actRoute:ActivatedRoute,private api:ApiStudentService,private router:Router){

  };
  ngOnInit(){
    this.id=this.__actRoute.snapshot.params['id'];
    this.api.getStudentById(this.id).subscribe((res:any)=>{
      this.data=res;
    })
  };

  delete(){
    this.api.delete(this.id).subscribe((res:any)=>{
      this.router.navigate(['/api']);
    });
    
  }
}
