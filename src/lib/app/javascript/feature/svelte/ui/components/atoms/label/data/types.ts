import type { HtmlProps } from "#lib/app/javascript/_shared/data/type.ts";

export type LabelProps = HtmlProps & {
    label: string;
    for: string;
};