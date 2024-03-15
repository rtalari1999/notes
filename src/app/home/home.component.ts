import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  providers:[ProductService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
   this.productService.getProductList().subscribe((item)=>{
      console.log('_____Products', item)
    })
  }

}
