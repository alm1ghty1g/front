import {Injectable} from "@angular/core";
import {url} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";


@Injectable({providedIn: "root"})
export class CategoryService {


  constructor(private http: HttpClient) {
  }


  addCategory(category: Category): Observable<Category>{

    const addCategoryUrl = `${url}/category/add`;

    return this.http.post<Category>(addCategoryUrl, category);

  }

}
