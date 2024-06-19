/** @odoo-module **/

import { _lt, _t } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";



export class FieldIncrement extends Component {
    static template = "web.FieldIncrement";
    
}

export const incrementField = {
    component: FloatField,
    displayName: _lt("Increment"),
    supportedOptions: [
        {
            label: _lt("Increment number"),
            name: "increment_field",
            type: "integer",
            default: 10,
        },
    ],
    supportedTypes: ["float", "monetary"],
    isEmpty: () => false,
    // extractProps: ({ attrs, options }) => {
    //     // Sadly, digits param was available as an option and an attr.
    //     // The option version could be removed with some xml refactoring.
    //     let digits;
    //     if (attrs.digits) {
    //         digits = JSON.parse(attrs.digits);
    //     } else if (options.digits) {
    //         digits = options.digits;
    //     }

    //     return {
    //         formatNumber:
    //             options?.enable_formatting !== undefined
    //                 ? Boolean(options.enable_formatting)
    //                 : true,
    //         inputType: options.type,
    //         step: options.step,
    //         digits,
    //         placeholder: attrs.placeholder,
    //     };
    // },
};

registry.category("fields").add("float", incrementField);
