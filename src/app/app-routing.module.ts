import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from "./pages/registration/registration.component";
import {AddProductComponent} from "./pages/add-product/add-product.component";
import {AddCategoryComponent} from "./pages/add-category/add-category.component";

const routes: Routes = [
  {path: 'register', component: RegistrationComponent },
  {path: 'add-product', component: AddProductComponent},
  {path: 'add-category', component: AddCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
