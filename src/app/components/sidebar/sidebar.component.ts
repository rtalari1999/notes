import { Component, OnInit } from '@angular/core';
import { AngularConceptService } from '../../services/angular-concept.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [HttpClientModule],
  providers: [AngularConceptService],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  angularConcept:any;
  constructor(private angularConceptService: AngularConceptService){}

  ngOnInit(): void {
    this.angularConcepts();
  }

  angularConcepts(){
    this.angularConceptService.getAngularConcept().subscribe((concept:any) =>{
      this.angularConcept = concept;
      console.log('____', this.angularConcept)
    })
  }

}
