import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductPipe } from '../product.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-product',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers:[ProductService],
  templateUrl: './filter-product.component.html',
  styleUrl: './filter-product.component.css'
})
export class FilterProductComponent implements OnInit{
  products: any ;

  constructor(private activatedroute: ActivatedRoute, private productService: ProductService, private router:Router){}
  ngOnInit(): void {
    this.activatedroute.snapshot.params['name'];
    this.activatedroute.snapshot.params['brand'];
    console.log('___brand in filter', this.activatedroute.snapshot.params['brand'])
    this.getProducts();
  }

  getProducts():void{
    this.productService.getProductList().subscribe((item)=>{
       console.log('_____Products', item)
       const productPipe = new ProductPipe();
       this.products=  productPipe.transform(item, this.activatedroute.snapshot.params['brand']);
     })
   }

   SelectedProduct(item:any){
    this.router.navigate(['landing-page/selected'], {queryParams:item});
   }

}
