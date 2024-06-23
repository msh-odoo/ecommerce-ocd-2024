/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Timer } from "../../components/Timer/Timer";
// import { BidDialog } from "../../components/BidDialog/BidDialog";


export class ProductDetails extends Component {
    static template = "ecommerce.ProductDetails";

    setup() {
        super.setup();
        this.product = this.props.detail.product;
        this.endDate = moment(this.product.end_date, 'YYYY-MM-DD hh:mm:ss');
    }

    onAddToCart(ev) {
        // this.env.bus.trigger('add_dialog', { dialog: BidDialog, props: {
        //     'title': 'Place Bid',
        // }});
    }
}
ProductDetails.components = { Timer }

registry.category("screens").add("ProductDetails", ProductDetails);
