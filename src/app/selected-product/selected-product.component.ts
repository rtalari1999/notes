import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selected-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-product.component.html',
  styleUrl: './selected-product.component.css'
})
export class SelectedProductComponent implements OnInit{
  product:any;
  isBuyNow:boolean = false;
  constructor(private activatedroute: ActivatedRoute,  private router:Router){}

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe(param =>{
      this.product = param;
      console.log('___selected item', this.product);
    })
  }
  buyNow(){
    this.isBuyNow = true;
  }
}
