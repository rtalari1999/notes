import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user!: { id: string; name: string; } ;
  constructor(private route: ActivatedRoute, private router:Router){

  }
  ngOnInit(): void {
    this.user = {
    id: this.route.snapshot.params['id'],
    name: this.route.snapshot.params['name']
    }
    this.route.params.subscribe((data:Params) =>{
      this.user = {
        id: data['id'],
        name: data['name']
        }
    })
  }

  profileofRama(){
    this.router.navigate(['/profile',4,'Rama'], {queryParams:{page:1, search:'Rama'}, fragment:'loading'})
  }


}
