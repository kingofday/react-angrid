import type { Locale, PropsTypes } from './an-grid';
declare type Props = Partial<PropsTypes> & {
    empty: boolean;
    loading: boolean;
    sortable: (value: string, sort: boolean) => void;
    lang: Locale;
};
export declare const Main: ({ showRowNumber, columnNumberTitle, columns, rows, empty, loading, className, lang, sortable, }: Props) => JSX.Element;
export declare const Table: import("react").MemoExoticComponent<({ showRowNumber, columnNumberTitle, columns, rows, empty, loading, className, lang, sortable, }: Props) => JSX.Element>;
export {};
