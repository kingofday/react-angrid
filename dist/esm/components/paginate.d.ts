import type { Locale, PropsTypes } from './an-grid';
declare type Props = Partial<PropsTypes> & {
    range: number[];
    lang: Locale;
};
export declare const Main: ({ totalCount, pageSize, onPageChange, range, showTotalRecord, showCurrentPage, showNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, lang, rtl, }: Props) => JSX.Element;
export declare const Paginate: import("react").MemoExoticComponent<({ totalCount, pageSize, onPageChange, range, showTotalRecord, showCurrentPage, showNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, lang, rtl, }: Props) => JSX.Element>;
export {};
