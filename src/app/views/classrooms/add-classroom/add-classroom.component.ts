import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassroomsService } from '../../../services/classrooms.service';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent implements OnInit {
  classroomForm: FormGroup;
  is409: boolean;
  
  constructor(private fb: FormBuilder,
              private classroomsService: ClassroomsService,
              private router: Router,) { this.is409=false }

  ngOnInit(): void {
    this.classroomForm = this.fb.group({
      name: ['', Validators.required ],
      email:['',Validators.pattern("^([a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4},?)+$")],
   });
  }
  
  onSubmit():void{  
    
    const newClassroom = this.classroomForm.get('name').value;
    const emails=this.classroomForm.get('email').value;
    console.log(emails)
    const instructorsEmail=emails.split(',');
    console.log(instructorsEmail);
    this.classroomsService.createClassroom(newClassroom,instructorsEmail).subscribe(
      res => {
        console.log('Classroom created');
        this.router.navigate(['classrooms',res.slug,'instructor-dashboard']);
    },error => { 
      if (error.status==409){this.is409=true}
       console.log(status);
      }
    );
    
  }

   openInstructordashboard(slug: string){
     this.router.navigate(['/classrooms',slug,'instructor-dashboard']);
   }
}
