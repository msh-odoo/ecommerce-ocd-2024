
import { Component } from "@odoo/owl";
import { ProductItem } from "./ProductItem";

export class ProductList extends Component {
    static template = "ecommerce.ProductList";
}

ProductList.components = { ProductItem }
