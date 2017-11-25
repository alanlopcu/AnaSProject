export class Order{
    customer: OrderCustomer;
    orderDate: Date;
    orderNumber: string;
    items: OrderItem[];
    customerId: number;
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