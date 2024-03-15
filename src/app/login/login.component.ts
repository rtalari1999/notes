import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  error:string = '';

  constructor(private fb: FormBuilder, private router: Router){}

  userLoginForm = this.fb.group({
    email: ['', Validators.required],
    password:['', Validators.required],
  })

  login():void{
    console.log('Success');
    localStorage.setItem('login', 'true');
    this.router.navigate(['/landing-page']);

  }

}
