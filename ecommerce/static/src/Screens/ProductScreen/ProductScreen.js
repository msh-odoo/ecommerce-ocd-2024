/** @odoo-module **/

import { Component, useState, onWillStart } from "@odoo/owl";
import { ProductList } from "./ProductList";
import { Sidebar } from "./Sidebar";
import { registry } from "@web/core/registry";
import { useFetchData } from "../../core/db"

export class ProductScreen extends Component {
    static template = "ecommerce.ProductScreen";

    setup() {
        super.setup();
        this.state = useState({
            products: [],
        });
        onWillStart(this.willStart);
        this.fetchData = useFetchData();
    }
    async willStart() {
        this.datas = await this.fetchData();
        this.state.products = this.datas.products;
        this.env.db.save('datas', this.datas);
    }

    onFilterItems(ev) {
        const categoryID = ev.detail.id;
        const filteredProducts = this.env.db.filterProducts(categoryID);
        this.state.products = filteredProducts;
    }
}

ProductScreen.components = { ProductList, Sidebar }

registry.category("screens").add("ProductScreen", ProductScreen);
