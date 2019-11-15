import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  pageNumber = 0;
  pageSize = 25;
  productList: Array<Product>;
  totalProducts: number;

  constructor(private productServiceService: ProductServiceService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  };

  getProducts() {
    this.productList = [];
    this.productServiceService.get(this.pageNumber, this.pageSize)
      .subscribe(response => {
        this.productList = response.items;
        this.totalProducts = response.total;
      }, (error)=>{
        console.log(error);
      });
  }

  onChangePage(number) {
    this.pageNumber = number;
    this.getProducts();
  }

  onChangeSize(number){
    this.pageSize = number;
    this.getProducts();
  }

}
