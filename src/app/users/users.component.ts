import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent  implements OnInit{
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

}
