import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export class User{
  name:string;
  constructor( name:string){
    this.name = name;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes';

  // userDetails = new User('demo user');

  // onSubmit(){
  //   console.log('______onsubmit', this.userDetails);

  // }


  registrationForm = new FormGroup({
    userName : new FormControl('Raju') ,
    password:  new FormControl(''),
    conformPassword:  new FormControl('')
  })
}
