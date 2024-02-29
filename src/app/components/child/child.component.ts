import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnDestroy , OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked{
  interval!: Subscription;
  @ViewChild('h') header:any;
  @ContentChild('heading4') head!: ElementRef ;
  @Input() title:any;
  @Input() titles:any;
  empName ='xyz';


  constructor(){
    //console.log('title in child constructor', this.title)
  }

  ngOnInit(): void {
    //this.intervall();
    //console.log('title in child', this.title)
    //console.log('header in ngOnInit', this.header);
  }


  intervall(){
    this.interval = interval(1000).subscribe(int =>{
      console.log('__________interval from child',int)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {

    //console.log('on change method', changes);
    //console.log('header in ngOnChanges', this.header);


    /**
     * ngonchanges can be executed when ever a property of child component getting some data from paent.
     * inside ngonchanges method we can have status of that input decorator property.
     * 
     */
    
  }
  ngDoCheck(): void {
    //console.log('ngDoCheck child component is called')
    console.log('header in ngDoCheck', this.head);

  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit child component is called', this.head)
    /**
     * The ngAfterContentInit lifecycle hook is called after the components projected content has been fully initialized.
     */
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked child component is called', this.head)
  }

  ngAfterViewInit(): void {
    //console.log('ngAfterViewInit child component is called')
    //console.log('header in ngAfterViewInit', this.header);
    /**
     * ngAfterViewInit life cycle hook method is called once the view is loaded
     */
  }
  ngAfterViewChecked(): void {
    //console.log('ngAfterViewChecked child component is called')
    //console.log('header in ngAfterViewChecked', this.header);
  }

  ngOnDestroy(): void {
    //this.interval.unsubscribe();
    console.log('destroyed child component')
  }

}
