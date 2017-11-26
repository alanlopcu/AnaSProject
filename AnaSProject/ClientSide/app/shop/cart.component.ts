import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";

@Component({
    selector: "sana-cart",
    templateUrl: "cart.component.html",
    styleUrls: ["cart.component.css"]
})
export class Cart {
    constructor(private data: DataService) {

    }
}