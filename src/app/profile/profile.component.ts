import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CanDeactivateType } from '../auth.guard';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
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

  // canDeactivate(): CanDeactivateType {
  //   if (this.promptUser) {
  //     const deactivateSubject = new Subject<boolean>();
  //     this._confirmation.confirm({
  //       message: 'Are you sure you want to leave? Some data may be lost.',
  //       icon: '',
  //       accept: () => {
  //         deactivateSubject.next(true);
  //       },
  //       reject: () => {
  //         deactivateSubject.next(false);
  //       },
  //     });
  //     return deactivateSubject;
  //   } else {
  //     return true;
  //   }
  // }

}
