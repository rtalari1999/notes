import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[FormBuilder]
})
export class LoginComponent implements OnInit{
  errorMsg : string = '';
  userLoginForm = this.fb.group({
    emailAddress: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private router: Router){
    localStorage.setItem('isLoggedIn', JSON.stringify(false))

  }
  ngOnInit(): void {
    
  }
  submitForm(){
    console.log('User Form details', this.userLoginForm.value);
    if(this.userLoginForm.valid){
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      if(this.userLoginForm.value.emailAddress == 'Myaccount' && this.userLoginForm.value.password == 'MA@123'){
        this.router.navigate(['/dashboard'])
      } else{
        this.errorMsg = 'Invalid Email or Password!';
        localStorage.setItem('isLoggedIn', JSON.stringify(false));
      }
    }
  }

}
