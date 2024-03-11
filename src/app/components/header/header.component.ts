import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

   isLoggedIn = localStorage.getItem('isLoggedIn');
   constructor(private router: Router){}
   ngOnInit(): void {
    console.log(this.isLoggedIn);
   }

   signout(){
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = 'false';
    this.router.navigate(['/login'])
   }

}
