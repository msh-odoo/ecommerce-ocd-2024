/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Timer } from "../../components/Timer/Timer";

export class ProductItem extends Component {
    static template = "ecommerce.ProductItem";

    setup() {
        super.setup();
        this.product = this.props.product;
        this.endDate = moment(this.product.end_date, 'YYYY-MM-DD hh:mm:ss')
    }

    onClickItem(ev) {
        const id = ev.currentTarget.getAttribute('data-id');
        const product = this.env.db.getProduct(parseInt(id))
        this.env.bus.trigger('change_screen', { 'screen_name': 'ProductDetails', product: this.product });
    }
}

ProductItem.components = {Timer};
