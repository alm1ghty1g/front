import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../../services/product-service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;


  constructor(private productService: ProductService, private router: Router) {

    this.product = new Product();

  }

  ngOnInit(): void {
  }

  addProduct() {

    this.productService.addProduct(this.product).subscribe(p => {
      this.router.navigate(['/add'])
    }, error1 => {
      console.log(error1);
    })

  }

}
