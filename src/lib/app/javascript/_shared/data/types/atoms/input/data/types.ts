import type { HtmlProps } from "../../../../type";

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