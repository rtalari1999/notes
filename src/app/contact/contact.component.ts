import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  user!:{id:string, name:string};

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    // this.user = {
    // id : this.route.snapshot.params['id'],
    // name : this.route.snapshot.params['name']
    // }

    this.route.params.subscribe(data =>{
      this.user = {
        id : data['id'],
        name : data['name']
        }
    })
    
  }

  // http://localhost:4200/contacts/1/abc?page=1&search=abc

}
