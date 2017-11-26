webpackJsonp(["main"],{

/***/ "../../../../../ClientSide/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../ClientSide/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../ClientSide/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../ClientSide/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Sana Webshop Assessment';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sana-webshop',
            template: __webpack_require__("../../../../../ClientSide/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../ClientSide/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shop_productList_component__ = __webpack_require__("../../../../../ClientSide/app/shop/productList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shop_cart_component__ = __webpack_require__("../../../../../ClientSide/app/shop/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shop_shop_component__ = __webpack_require__("../../../../../ClientSide/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shop_newproduct_component__ = __webpack_require__("../../../../../ClientSide/app/shop/newproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_dataService__ = __webpack_require__("../../../../../ClientSide/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { HttpClientModule } from "@angular/common/http";









var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_6__shop_shop_component__["a" /* Shop */] },
    { path: "newproduct", component: __WEBPACK_IMPORTED_MODULE_7__shop_newproduct_component__["a" /* NewProduct */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shop_productList_component__["a" /* ProductList */],
                __WEBPACK_IMPORTED_MODULE_5__shop_cart_component__["a" /* Cart */],
                __WEBPACK_IMPORTED_MODULE_6__shop_shop_component__["a" /* Shop */],
                __WEBPACK_IMPORTED_MODULE_7__shop_newproduct_component__["a" /* NewProduct */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* RouterModule */].forRoot(routes, {
                    useHash: true,
                    enableTracing: true
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__shared_dataService__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/shared/dataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order__ = __webpack_require__("../../../../../ClientSide/app/shared/order.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from "@angular/common/http";




//import * as orders from "./order";//I dont need this for this assessment i guess...
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.products = [];
        this.order = new __WEBPACK_IMPORTED_MODULE_3__order__["a" /* Order */]();
    }
    //Using HttpClient ----> not ok
    //loadProducts(): Observable<boolean> {
    //return this.http.get("/api/products")
    //    .map((data: any[]) => {
    //    this.products = data;
    //    return true;
    //    });
    //}
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
            item = new __WEBPACK_IMPORTED_MODULE_3__order__["b" /* OrderItem */]();
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
    DataService.prototype.insertProduct = function (prod) {
        return this.http.post("/api/products", prod)
            .map(function (response) {
            var message = response.json();
            //alert(message.productId);
            return true;
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/shared/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrderItem; });
/* unused harmony export OrderCustomer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var Order = (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["sum"](__WEBPACK_IMPORTED_MODULE_0_lodash__["map"](this.items, function (i) { return i.unitPrice * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());

var OrderItem = (function () {
    function OrderItem() {
    }
    return OrderItem;
}());

var OrderCustomer = (function () {
    function OrderCustomer() {
    }
    return OrderCustomer;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/shop/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-cart table {\r\n    font-size:smaller;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientSide/app/shop/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-cart\">\r\n    <h5>My Sana Cart</h5>\r\n    <div>Subtotal: {{ data.order.subtotal | currency:\"COP\":true }}</div>\r\n    <div>No. Items: {{ data.order.items.length }}</div>\r\n    <table class=\"table table-condensed table-hover table-responsive\">\r\n        <thead>\r\n            <tr>\r\n                <td>Product</td>\r\n                <td>#</td>\r\n                <td>$</td>\r\n                <td>Total</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let o of data.order.items\">\r\n                <td>{{ o.productTitle }}</td>\r\n                <td>{{ o.quantity }}</td>\r\n                <td>{{ o.unitPrice | currency:\"COP\":true }}</td>\r\n                <td>{{ (o.unitPrice * o.quantity) | currency:\"COP\":true }}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientSide/app/shop/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientSide/app/shared/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Cart = (function () {
    function Cart(data) {
        this.data = data;
    }
    Cart = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "sana-cart",
            template: __webpack_require__("../../../../../ClientSide/app/shop/cart.component.html"),
            styles: [__webpack_require__("../../../../../ClientSide/app/shop/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]])
    ], Cart);
    return Cart;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/shop/newproduct.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <h4 class=\"\" style=\"text-align:center\">Add New Product</h4>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n        <form (submit)=\"onInsert()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"title\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"prod.title\" #title=\"ngModel\" required/>\r\n                <div class=\"text-danger\" *ngIf=\"title.touched && title.invalid && title.errors.required\">Title is required!</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"price\">Price</label>\r\n                <input class=\"form-control\" name=\"price\" [(ngModel)]=\"prod.price\" required #price=\"ngModel\" />\r\n                <div class=\"text-danger\" *ngIf=\"price.touched && price.invalid && price.errors.required\">Price is required!</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"description\">Description</label>\r\n                <input class=\"form-control\" name=\"description\" [(ngModel)]=\"prod.description\" #description=\"ngModel\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Accept\" [disabled]=\"theForm.invalid\" />\r\n                <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientSide/app/shop/newproduct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProduct; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientSide/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewProduct = (function () {
    function NewProduct(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.prod = {
            price: 0,
            title: "",
            description: "",
            picture: "sana.png"
        };
    }
    NewProduct.prototype.onInsert = function () {
        var _this = this;
        this.data.insertProduct(this.prod)
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(["/"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to insert product!"; });
    };
    NewProduct = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "new-product",
            template: __webpack_require__("../../../../../ClientSide/app/shop/newproduct.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NewProduct);
    return NewProduct;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/shop/productList.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-info {\r\n    height: 270px;\r\n}\r\n    .product-info img {\r\n        max-width: 100px;\r\n        max-height: 100px;\r\n        float: left;\r\n        margin: 0 2px;\r\n        border: solid 1px black;\r\n    }\r\n\r\n    .product-info .product-title {\r\n        font-size: large;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .product-info button {\r\n        position: absolute;\r\n        bottom: 10px;\r\n        left: 50%;\r\n        margin-left: -50px;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientSide/app/shop/productList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"product-info col-md-4 well well-sm\" *ngFor=\"let p of products\">\r\n        <img src=\"/img/{{ p.picture }}\" class=\"img-responsive\" alt=\"{{ p.title }}\"/>\r\n        <div class=\"product-title\">{{ p.title }}</div>\r\n        <div><strong>Number</strong>: {{ p.productId }}</div>\r\n        <div><strong>Price</strong>: {{ p.price | currency:\"COP\":true }}</div>\r\n        <div><strong>Description</strong>: {{ p.description }}</div>\r\n        <button id=\"buyButton\" class=\"btn btn-success btn-sm pull-right\" (click)=\"addProduct(p)\">Add to cart!</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientSide/app/shop/productList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientSide/app/shared/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductList = (function () {
    function ProductList(data) {
        this.data = data;
        this.products = [];
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function (success) {
            if (success) {
                _this.products = _this.data.products;
            }
        });
    };
    ProductList.prototype.addProduct = function (product) {
        this.data.AddToOrder(product);
    };
    ProductList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "product-list",
            template: __webpack_require__("../../../../../ClientSide/app/shop/productList.component.html"),
            styles: [__webpack_require__("../../../../../ClientSide/app/shop/productList.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]])
    ], ProductList);
    return ProductList;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <a routerLink=\"newproduct\" class=\"btn btn-info btn-block\">Add new product</a>\r\n        <div class=\"well well-sm\">\r\n            <sana-cart></sana-cart>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientSide/app/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Shop = (function () {
    function Shop() {
    }
    Shop = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "sana-shop",
            template: __webpack_require__("../../../../../ClientSide/app/shop/shop.component.html")
        })
    ], Shop);
    return Shop;
}());



/***/ }),

/***/ "../../../../../ClientSide/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../ClientSide/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../ClientSide/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../ClientSide/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientSide/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map