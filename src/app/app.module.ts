import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './pages/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { LoginComponent } from './pages/login/login.component';
import {CookieService} from "ngx-cookie-service";
import {JwtInterceptor} from "./utils/JwtInterceptor";
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderMenuComponent } from './pages/header-menu/header-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AddProductComponent,
    AddCategoryComponent,
    UpdateProductComponent,
    LoginComponent,
    LoginComponent,
    ProfileComponent,
    HeaderMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    ],//fix me, add cookies provider
  bootstrap: [AppComponent],
})
export class AppModule { }
