import * as _ from "lodash";

export class Order{
    customer: OrderCustomer;
    orderDate: Date = new Date();
    orderNumber: string;
    items: Array<OrderItem> = new Array<OrderItem>();
    customerId: number;

    get subtotal(): number {
        return _.sum(_.map(this.items, i => i.unitPrice * i.quantity));
    };
}

export class OrderItem {
    quantity: number;
    unitPrice: number;
    productId: number;
    productCategoryId: number;
    productPrice: number;
    productTitle: string;
    productDescription: string;
    productPicture: string;
}

export class OrderCustomer {
    fullName: string;
    email: string;
    phoneNumber: string;
    identity: string;
}