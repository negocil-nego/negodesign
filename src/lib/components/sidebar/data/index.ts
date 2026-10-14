import type { NavItem, MenuRightItem } from "./types";
import { gettingStarted } from "./getting-started";
import { components } from "./components";

export type { NavItem, MenuRightItem };
export { gettingStarted, components };

export const links: NavItem[] = [gettingStarted, components];
