import { Component, useState, onMounted, useRef, reactive, useExternalListener } from "@odoo/owl";
import { Header } from "./components/Header/header";
import { Container } from "./components/Container/container";
import { Footer } from "./components/Footer/footer";
import { registry } from "@web/core/registry";

import { ProductScreen } from "./Screens/ProductScreen/ProductScreen";
// import { DialogContainer } from "./components/dialog/dialog_container";


// TODO: MSH: Add Favourite feature, add Heart Icon on header to display all saved favoruites
// TODO: MSH: Add Cart button on header to display popup of added products in cart
// TODO: MSH: Remove Dialog related stuff, we will not cover here
// TODO: Need to add Search component with some props like model, so we can search on that model,
// we will have generic model where we will write code for communication with model

export class Ecommerce extends Component {
    static template = "ecommerce.root";

    setup() {
        super.setup();
        this.mainScreen = useState({ name: 'ProductScreen', component: ProductScreen });
        this.env.bus.addEventListener("change_screen", this.onChangeScreen.bind(this));
        this.env.bus.addEventListener("add_dialog", this.onAddDialog.bind(this));
        this.mainScreenProps = {};

        this.dialogs = reactive({});
        this.dialogId = 0;
    }

    /**
     * Used to give the `state.mobileSearchBarIsShown` value to main screen props
     */
    get mainScreenPropsFielded() {
        return Object.assign({}, this.mainScreenProps);
    }

    onAddDialog(ev) {
        const id = this.dialogId++
        this.lastId = id;
        const close = () => {
            if (this.dialogs[id]) {
                delete this.dialogs[id];
                if (ev.detail.onClose) {
                    ev.detail.onClose();
                }
            }
        }
        const dialog = {
            class: ev.detail.dialog,
            props: Object.assign({}, ev.detail.props, { close, id }),
            dialogData: {
                close,
            }
        };
        this.dialogs[id] = dialog;
    }
    /**
     * Called when main screen is changed
     * @param {Event} ev 
     */
    onChangeScreen(ev) {
        const screenRegistry = registry.category("screens");
        const screen = screenRegistry.get(ev.detail.screen_name)
        this.mainScreen.name = ev.detail.screen_name;
        this.mainScreen.component = screen;
        this.mainScreenProps = { detail: ev.detail };
    }
}

Ecommerce.components = { Header, Container, Footer } // DialogContainer
