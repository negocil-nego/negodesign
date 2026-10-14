import type { NavItem } from "./types";
import { inputItems } from "./input";

export const forms: NavItem = {
    label: "Forms",
    href: "/docs/components/forms",
    items: [
        {
            label: "Input",
            href: "/docs/components/forms/input",
            items: inputItems,
        },
        {
            label: "Select",
            href: "/docs/components/forms/select",
        },
        {
            label: "Textarea",
            href: "/docs/components/forms/textarea",
        },
        {
            label: "Checkbox",
            href: "/docs/components/forms/checkbox",
        },
        {
            label: "Radio",
            href: "/docs/components/forms/radio",
        },
        {
            label: "Button",
            href: "/docs/components/forms/button",
        },
        {
            label: "Label",
            href: "/docs/components/forms/label",
        },
    ],
};
