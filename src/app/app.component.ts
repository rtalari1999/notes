import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule , ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './guards/auth.service';

export class User{
  name:string;
  constructor( name:string){
    this.name = name;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, FormsModule, ReactiveFormsModule,RouterLink, RouterLinkActive],
  providers:[AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes';

  // userDetails = new User('demo user');

  // onSubmit(){
  //   console.log('______onsubmit', this.userDetails);

  // }
  constructor(private fb: FormBuilder, private authService : AuthService){}


  registrationForm = this.fb.group({
    userName: ['qwert', Validators.required],
    password: [''],
    conformPassword: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      pinCode: ['']
    })
  })

  onSubmit(){
    console.log('_____________registrationForm', this.registrationForm.value);
  }

 updateRegistrationForm(){
  this.registrationForm.patchValue({
    userName: "qwert",
    password:  "qwert",
    conformPassword:  "qwert"

 })






  // registrationForm = new FormGroup({
  //   userName : new FormControl('Raju', Validators.required) ,
  //   password:  new FormControl(''),
  //   conformPassword:  new FormControl('')
  // })
}


logout(){
  this.authService.logout();
  localStorage.setItem("isLoggedIn", JSON.stringify(false));
  console.log(localStorage.getItem('isLoggedIn'))
}

login(){
  this.authService.login();
  localStorage.setItem("isLoggedIn", JSON.stringify(true));
}
}


/****
 * 
 * fName
 * lName
 * address, city, state, pincode
 */