import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private router: Router){}

  userRegisterForm = this.fb.group({
    emailAddress: ['', Validators.required],
    password: ['', Validators.required],
    address: this.fb.group({
      address1:['', Validators.required],
      address2:[''],
      city:['', Validators.required],
      state:['', Validators.required],
      zip:['', Validators.required]
    })
  })

  register(){
    //
  }

}
