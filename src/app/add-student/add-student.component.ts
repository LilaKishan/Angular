import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  id=-1;
  constructor(private __api:ApiStudentService,private __router:Router,private __actRout:ActivatedRoute){

  };
  myForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    rollno: new FormControl(''),
    department: new FormControl(''),
    studentimg: new FormControl('')
  });

  ngOnInit(){
    if (this.__actRout.snapshot.params['id']!=null) {
      this.id=this.__actRout.snapshot.params['id'];
      this.__api.getStudentById(this.id).subscribe((res:any)=>{
        this.myForm.controls.id.setValue(res.id);
        this.myForm.controls.rollno.setValue(res.rollno);
        this.myForm.controls.name.setValue(res.name);
        this.myForm.controls.department.setValue(res.department);
        this.myForm.controls.studentimg.setValue(res.studentimg);
      })
      
    }
  }

  insert(){
   if(this.id>0){
    this.__api.edit(this.id,this.myForm.value).subscribe((res)=>{
      this.__router.navigate(['/api']);
    });
   }
   else{
    this.__api.insert(this.myForm.value).subscribe((res)=>{
      this.__router.navigate(['/api']);
    });
   }
  };


};


