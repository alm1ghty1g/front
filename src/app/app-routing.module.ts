import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from "./pages/registration/registration.component";
import {AddProductComponent} from "./pages/add-product/add-product.component";
import {AddCategoryComponent} from "./pages/add-category/add-category.component";
import {UpdateProductComponent} from "./pages/update-product/update-product.component";
import {LoginComponent} from "./pages/login/login.component";
import {ProfileComponent} from "./pages/profile/profile.component";


const routes: Routes = [
  {path: 'register', component: RegistrationComponent },
  {path: 'add-product', component: AddProductComponent},
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'product/:id/update', component: UpdateProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:id/update', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
