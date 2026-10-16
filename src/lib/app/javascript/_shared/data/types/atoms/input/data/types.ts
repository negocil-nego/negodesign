import type { HtmlProps } from "../../../../type";
import type { LabelProps } from "../../label/types";

export type InputType =
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'time';

export type InputProps = HtmlProps & {
    type: InputType;
    required?: boolean
    disabled?: boolean
    placeholder?: string
    value?: string
};

export type InputWithoutLabelProps = HtmlProps & {
    labelProps?: LabelProps;
    inputProps: InputProps;
};