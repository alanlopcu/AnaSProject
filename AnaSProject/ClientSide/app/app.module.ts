import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ProductList } from "./shop/productList.component";
import { Cart } from "./shop/cart.component";
import { Shop } from "./shop/shop.component";
import { NewProduct } from "./shop/newproduct.component";
import { DataService } from "./shared/dataService";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

let routes = [
    { path: "", component: Shop },
    { path: "newproduct", component: NewProduct}
];

@NgModule({
    declarations: [
        AppComponent,
        ProductList,
        Cart,
        Shop,
        NewProduct
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: true
        })
  ],
  providers: [
      DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
