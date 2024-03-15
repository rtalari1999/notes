import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  error:string = '';

  constructor(private fb: FormBuilder){}

  userRegisterForm = this.fb.group({
    email: ['', Validators.required],
    password:['', Validators.required],
    address:['', Validators.required],
    address2:[''],
    city:['', Validators.required],
    state:['', Validators.required],
    zip:['', Validators.required]
  })

  register():void{
    if(this.userRegisterForm.valid){
    this.userRegisterForm.value;
    console.log('register', this.userRegisterForm.value)
    this.error = 'Successfully registered.';
    } else{
      this.error = 'Please enter  all required fields.'
    }
  }

}
