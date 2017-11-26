import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Router } from "@angular/router";

@Component({
    selector: "new-product",
    templateUrl: "newproduct.component.html"
})
export class NewProduct {
    constructor(public data: DataService, private router: Router) {
    }

    errorMessage: string = "";

    public prod = {
        price: 0,
        title: "",
        description: "",
        picture: "sana.png"
    };

    onInsert() {
        if (this.data.getMemoryStorageState()) {
            this.data.addProduct(this.prod);
            this.router.navigate(["/"]);
        }
        else {
            this.data.insertProduct(this.prod)
                .subscribe(success => {
                    if (success) {
                        this.router.navigate(["/"]);
                    }
                }, err => this.errorMessage = "Failed to insert product!");
        }
    }
}