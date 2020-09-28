import {Product} from "../model/Product";
import {url} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable({providedIn: "root"})
export class ProductService {


  constructor(private http: HttpClient) {
    //const id: Observable<string> = route.params.pipe(map(p => p.id));
  }


  findProduct(id: string): Observable<Product> {
    console.log("you are here");
    const findProductUrl = `${url}/product/find-by/${id}`;

    return this.http.get<Product>(findProductUrl);
  }

  updateProduct(product: Product): Observable<Product> {

    const updateProductUrl = `${url}/product/update`;

    return this.http.post<Product>(updateProductUrl, product);

  }


  addProduct(product: Product): Observable<Product> {

    const addProductUrl = `${url}/product/add`;

    return this.http.post<Product>(addProductUrl, product);


  }


}
