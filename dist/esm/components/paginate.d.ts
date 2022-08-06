import type { PropsTypes } from './an-grid';
declare type Props = Partial<PropsTypes> & {
    range: number[];
};
export declare const Main: ({ totalCount, pageSize, onPageChange, range, showTotalRecord, showCurrentPage, showNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, textNumber, textTotal, textCurrent, rtl, }: Props) => JSX.Element;
export declare const Paginate: import("react").MemoExoticComponent<({ totalCount, pageSize, onPageChange, range, showTotalRecord, showCurrentPage, showNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, textNumber, textTotal, textCurrent, rtl, }: Props) => JSX.Element>;
export {};
