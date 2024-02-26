import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnDestroy{
@Input() parentMessage:any;
@Output()submitData = new EventEmitter<any>;

counter = 0;
interval:any;

arr = [{name:'Raju',age:26,id:26}]
constructor(){
  console.log(' child component is called constructor')
  console.log(this.parentMessage);
  this.submit();
}

ngOnInit(): void {
  console.log(' child component is called oninit')
  this.interval = setInterval(()=>{
    this.counter = this.counter + 1;
    console.log(this.counter)

  }, 1000)
  
}
ngOnDestroy(): void {
  console.log('component is destroyed')
  clearInterval(this.interval)
}



submit(){
  this.submitData.emit(this.arr);

}

}
