//import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs"
import 'rxjs/add/operator/map';
import { Product } from "./product";
import { Order, OrderItem } from "./order";
//import * as orders from "./order";//I dont need this for this assessment i guess...

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    public products: Product[] = [];
    public order: Order = new Order();
    
    //Using HttpClient ----> not ok
    //loadProducts(): Observable<boolean> {
    //return this.http.get("/api/products")
    //    .map((data: any[]) => {
    //    this.products = data;
    //    return true;
    //    });
    //}

    public loadProducts(): Observable<Product[]> {
        return this.http.get("/api/products")
            .map((result: Response) => this.products = result.json());
    }

    public AddToOrder(product: Product) {
        let item: OrderItem = this.order.items.find(i => i.productId == product.productId);//If products exists...

        if (item) {
            item.quantity++;
        } else {
            item = new OrderItem();
            item.productId = product.productId;
            item.productTitle = product.title;
            item.productPrice = product.price;
            item.productDescription = product.description;
            item.productPicture = product.picture;
            item.productCategoryId = product.categoryId;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    }

    public insertProduct(prod) {
        return this.http.post("/api/products", prod)
            .map(response => {
                let message = response.json();
                //alert(message.productId);
                return true;
            });
    }

}