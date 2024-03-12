import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule , ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes';

  /**
   * 
   * localstorage and session storage
   */

  constructor(){
    console.log('________local storage')
  }

  login(){
    localStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('isSessionStorage', 'true');
  }

  logout(){
    localStorage.setItem('isLoggedIn', 'false');
    sessionStorage.setItem('isSessionStorage', 'false');

  }


}
