import {Product} from "../model/Product";
import {url} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable({providedIn: "root"})

export class ProductService {


  constructor(private http: HttpClient) {
  }



  addProduct(product: Product):Observable<Product> {

    const addProductUrl = `${url}/product/add`;

    return this.http.post<Product>(addProductUrl, product);


  }


}
