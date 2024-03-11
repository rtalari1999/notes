import { Component, OnInit } from '@angular/core';
import { AngularConceptService } from '../../services/angular-concept.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
