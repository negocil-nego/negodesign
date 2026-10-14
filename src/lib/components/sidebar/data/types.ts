export interface NavItem {
    label: string;
    href?: string;
    items?: NavItem[];
}

export interface MenuRightItem {
    label: string;
    id: string;
}
