import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
//import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProductList } from "./shop/productList.component";
import { Cart } from "./shop/cart.component";
import { Shop } from "./shop/shop.component";
import { NewProduct } from "./shop/newproduct.component";
import { DataService } from "./shared/dataService";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PersistenceModule } from "angular-persistence";
import { UiSwitchModule } from 'angular2-ui-switch'

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
        PersistenceModule,
        UiSwitchModule,
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
