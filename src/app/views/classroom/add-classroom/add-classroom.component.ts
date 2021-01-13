 import { Component, OnInit } from '@angular/core';
 import {FormGroup,FormBuilder,Validators} from '@angular/forms';

 @Component({
   selector: 'app-add-classroom',
   templateUrl: './add-classroom.component.html',
   styleUrls: ['./add-classroom.component.css']
 })
 export class AddClassroomComponent implements OnInit {
  classroomForm: FormGroup;
   
  
 constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
      this.classroomForm = this.fb.group({
        name: ['', Validators.required ],
        email:['',Validators.pattern("^([a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4},?)+$")],
     });
   }
  
 }
  
