import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs"
import 'rxjs/add/operator/map';
import { Product } from "./product";
import { Order, OrderItem } from "./order";
import { PersistenceService, StorageType } from "angular-persistence";
//import * as orders from "./order";//I dont need this for this assessment i guess...

@Injectable()
export class DataService {

    constructor(
        private http: Http,
        private persistenceService: PersistenceService
    ) {
    }

    public products: Product[] = [];
    public order: Order = new Order();
    public perSwitch: boolean = this.persistenceService.get('perSwitch', StorageType.LOCAL);

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

    public addProduct(prod) {
        this.products = this.persistenceService.get('productList', StorageType.LOCAL);//Clean DB product list & load my memory storage product list
        this.products.push(prod);//add my new product
        this.persistenceService.set('productList', this.products , { type: StorageType.LOCAL });//Memory & 'offline' storage
    }

    public insertProduct(prod) {
        return this.http.post("/api/products", prod)
            .map(response => {
                let message = response.json();
                return true;
            });
    }

    public activateMemoryStorage() {
        this.perSwitch = true;
        this.persistenceService.set('perSwitch', true, { type: StorageType.LOCAL });//Memory & 'offline' storage
    }

    public deactivateMemoryStorage() {
        this.perSwitch = false;
        this.persistenceService.set('perSwitch', false, { type: StorageType.LOCAL });//Database storage
    }

    public getMemoryStorageState() {
        return this.persistenceService.get('perSwitch', StorageType.LOCAL);
    }

    public getMemoryStorageProductList() {
        return this.persistenceService.get('productList', StorageType.LOCAL);
    }

}