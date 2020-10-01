import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../../services/product-service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {


  id: string;

  product = new Product();


  constructor(private productService: ProductService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log("we are inside")
    // console.log(this.route.snapshot.paramMap);
    const productId = this.route.snapshot.paramMap.get('id');

    console.log(productId);
    if (productId) {

      this.productService.findProduct(productId).subscribe(product => this.product = product)
    }
  }

  update() {
    this.productService.updateProduct(this.product).subscribe(product => this.product = product);
  }


  onSubmit() {
    this.update();

  }
}
