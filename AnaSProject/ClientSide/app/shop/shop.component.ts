import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../shared/dataService";
import { UiSwitchModule } from "angular2-ui-switch";

@Component({
    selector: "sana-shop",
    templateUrl: "shop.component.html"
})
export class Shop {

    constructor(public data: DataService, private router: Router) {
    }

    public msValue: boolean = this.data.perSwitch; //Persitent storage by default (I used database)
    errorMessage: string = "";

    private storageSwClicked() {
        console.log("Switch storage value: " + this.msValue);

        if (this.msValue) {
            this.data.activateMemoryStorage();
            this.router.navigate(["/"]);
        }
        else {
            this.data.deactivateMemoryStorage();
            this.router.navigate(["/"]);
        }
    }
}