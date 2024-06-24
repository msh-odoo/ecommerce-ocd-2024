
import { Component, useRef } from "@odoo/owl";

export class Sidebar extends Component {
    static template = "ecommerce.Sidebar";

    setup() {
        this.categoryRef = useRef('category_element');
    }

    onClickCategory(ev) {
        const target = ev.currentTarget;
        const id = target.getAttribute('data-id');
        const categoryElements = this.categoryRef.el.querySelectorAll('.category.active');
        [...categoryElements].forEach((categoryElement) => categoryElement.classList.remove('active'));
        target.classList.add('active');
        const customEvent = new CustomEvent("filterItems", { bubbles: true, detail: { id } });
        this.categoryRef.el.dispatchEvent(customEvent);
    }
}
