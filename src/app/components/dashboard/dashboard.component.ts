import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Route, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
constructor(private router: Router){}

  loadTopic(topic:string){
    console.log(topic, '________')
    if(topic === 'Directives'){
      this.router.navigate(['angular-topics/directives'])
    }
  }
}
