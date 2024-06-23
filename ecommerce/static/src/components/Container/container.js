/** @odoo-module **/

import { Component } from "@odoo/owl";
import { ProductScreen } from "../../Screens/ProductScreen/ProductScreen";
import { ProductDetails } from "../../Screens/ProductDetails/ProductDetails";


export class Container extends Component {
    static template = "ecommerce.container";
}

Container.components = { ProductScreen, ProductDetails };

Container.props = {
    mainScreenProps: { type: Object, optional: true },
    tname: { type: String },
    component: { type: Function }
};

Container.defaultProps = {
    mainScreenProps: {},
};
