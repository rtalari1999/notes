import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private router: Router){

  }

  onClickAbout() {
    // write logic for routing 

    this.router.navigate(['/contact', 4, 'pointer'], {queryParams:{page:2, search:'09988776'}, fragment:'loading'});

    // http://localhost:4200/profile/1/Raju
  }

}
