
import { Component } from "@odoo/owl";

export class MenuItem extends Component {
    static template = "ecommerce.menuItem";
}


export class Menus extends Component {
    static template = "ecommerce.menus";
}

Menus.components = { MenuItem }
