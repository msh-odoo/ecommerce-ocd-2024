/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Search } from "./search";

export class Header extends Component {
    static template = "ecommerce.header";

    onClickLogo() {
        window.location.href = "/show_owl";
    }
}

Header.components = { Search }
