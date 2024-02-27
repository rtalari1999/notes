import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements DoCheck{
  arr = [{name:'User', id:1, designation:'SE'}];
  obj = {name:'Raju'};
  title="Parent";
  mlist =["oppo", "redmi", "samsung"]
  childComponent: boolean= false;

  childCompo(){
    if(this.childComponent){
      this.childComponent = false;
    }else{
      this.childComponent = true;
    }
  }

  ngDoCheck(): void {
    console.log('paent do check')
  }
  



  getDatafromChild(empDetails: any){
    console.log('________________Child data', empDetails);

  }

  studentdata(){
    var ar = {name:'user', id:3, designation:'hhh'}
    this.arr = [...this.arr, ar]
    //this.arr.push({name:'Demo', id:2, designation:'SEE'})

  }

}


//@Input decorator and @Output decorator
//@Input decorator is used to transfer data from parent to child