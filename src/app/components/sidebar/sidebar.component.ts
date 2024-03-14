import { Component, OnInit } from '@angular/core';
import { AngularConceptService } from '../../services/angular-concept.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

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
  topicName= 'Get Started';
  constructor(private angularConceptService: AngularConceptService, private router: Router){}

  ngOnInit(): void {
    this.angularConcepts();
  }

  angularConcepts(){
    this.angularConceptService.getAngularConcept().subscribe((concept:any) =>{
      this.angularConcept = concept;
      console.log('____', this.angularConcept)
      this.router.navigate(['angular-topics/get-started'])
    })
  }

  loadTopic(topic:string){
    this.topicName = topic;
    if(topic === 'Components'){
      this.router.navigate(['angular-topics/components'])
      document.getElementsByClassName('activate')
    } else if(topic === 'Directives'){
      this.router.navigate(['angular-topics/directives'])
    } else if(topic === 'Decorators'){
      this.router.navigate(['angular-topics/decorators'])
    } else if(topic === 'Get Started'){
      this.router.navigate(['angular-topics/get-started'])
    } else if(topic === 'Interceptions'){
      this.router.navigate(['angular-topics/interceptions'])
    } else if(topic === 'Introduction'){
      this.router.navigate(['angular-topics/introduction'])
    } else if(topic === 'Lifecycle hooks'){
      this.router.navigate(['angular-topics/life-cycle-hooks'])
    } else if(topic === 'Modules'){
      this.router.navigate(['angular-topics/modules'])
    } else if(topic === 'Pipes'){
      this.router.navigate(['angular-topics/pipes'])
    } else if(topic === 'Services'){
      this.router.navigate(['angular-topics/services'])
    } else if(topic === 'Angular forms'){
      this.router.navigate(['angular-topics/forms'])
    }
  }

  //document.getElementsByClassName('activate').valueOf().item(0).innerText;
  //document.getElementsByClassName('activate').valueOf().item(0).style.backgroundColor = 'red'

}
