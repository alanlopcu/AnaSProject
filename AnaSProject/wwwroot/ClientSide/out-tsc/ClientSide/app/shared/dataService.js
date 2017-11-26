"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var order_1 = require("./order");
var angular_persistence_1 = require("angular-persistence");
//import * as orders from "./order";//I dont need this for this assessment i guess...
var DataService = (function () {
    function DataService(http, persistenceService) {
        this.http = http;
        this.persistenceService = persistenceService;
        this.products = [];
        this.order = new order_1.Order();
        this.perSwitch = this.persistenceService.get('perSwitch', angular_persistence_1.StorageType.LOCAL);
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .map(function (result) { return _this.products = result.json(); });
    };
    DataService.prototype.AddToOrder = function (product) {
        var item = this.order.items.find(function (i) { return i.productId == product.productId; }); //If products exists...
        if (item) {
            item.quantity++;
        }
        else {
            item = new order_1.OrderItem();
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
    };
    DataService.prototype.addProduct = function (prod) {
        this.products = this.persistenceService.get('productList', angular_persistence_1.StorageType.LOCAL); //Clean DB product list & load my memory storage product list
        this.products.push(prod); //add my new product
        this.persistenceService.set('productList', this.products, { type: angular_persistence_1.StorageType.LOCAL }); //Memory & 'offline' storage
    };
    DataService.prototype.insertProduct = function (prod) {
        return this.http.post("/api/products", prod)
            .map(function (response) {
            var message = response.json();
            return true;
        });
    };
    DataService.prototype.activateMemoryStorage = function () {
        this.perSwitch = true;
        this.persistenceService.set('perSwitch', true, { type: angular_persistence_1.StorageType.LOCAL }); //Memory & 'offline' storage
    };
    DataService.prototype.deactivateMemoryStorage = function () {
        this.perSwitch = false;
        this.persistenceService.set('perSwitch', false, { type: angular_persistence_1.StorageType.LOCAL }); //Database storage
    };
    DataService.prototype.getMemoryStorageState = function () {
        return this.persistenceService.get('perSwitch', angular_persistence_1.StorageType.LOCAL);
    };
    DataService.prototype.getMemoryStorageProductList = function () {
        return this.persistenceService.get('productList', angular_persistence_1.StorageType.LOCAL);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        angular_persistence_1.PersistenceService])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map