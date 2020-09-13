import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './pages/registration/registration.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AddProductComponent,
    AddCategoryComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
