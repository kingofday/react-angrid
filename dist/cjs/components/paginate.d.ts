import type { PropsTypes } from './an-grid';
declare type Props = Partial<PropsTypes> & {
    range: number[];
};
export declare const Main: ({ totalCount, pageSize, onPageChange, range, showTotalRecord, titleTotalRecord, showCurrentPage, titleCurrentPage, showNumberOfPage, titleNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, }: Props) => JSX.Element;
export declare const Paginate: import("react").MemoExoticComponent<({ totalCount, pageSize, onPageChange, range, showTotalRecord, titleTotalRecord, showCurrentPage, titleCurrentPage, showNumberOfPage, titleNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, }: Props) => JSX.Element>;
export {};
