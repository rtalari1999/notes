import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnDestroy , OnInit, OnChanges, DoCheck{
  interval!: Subscription;
  @Input() title:any;
  @Input() titles:any;
  empName ='xyz';


  constructor(){
    console.log('title in child constructor', this.title)
  }

  ngOnInit(): void {
    //this.intervall();
    console.log('title in child', this.title)
  }


  intervall(){
    this.interval = interval(1000).subscribe(int =>{
      console.log('__________interval from child',int)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log('on change method', changes);


    /**
     * ngonchanges can be executed when ever a property of child component getting some data from paent.
     * inside ngonchanges method we can have status of that input decorator property.
     * 
     */
    
  }
  ngDoCheck(): void {
    console.log('ngDoCheck child component is called')
  }

  ngOnDestroy(): void {
    //this.interval.unsubscribe();
    console.log('destroyed child component')
  }

}
