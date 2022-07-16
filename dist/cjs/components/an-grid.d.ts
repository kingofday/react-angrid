import { ReactNode } from 'react';
import './angrid.css';
export interface RowsType<T> {
    [key: string]: T;
}
export interface Columns {
    field: string;
    headerName: string;
    description?: string;
    width?: number;
    sortable?: boolean;
}
export interface PropsTypes {
    className?: string;
    theme?: 'dark' | 'light';
    minHeight?: number;
    emptyMessage?: string;
    columnNumberTitle?: string;
    showRowNumber: boolean;
    columns: Columns[];
    rows: RowsType<string | number | ReactNode>[];
    totalCount: number | undefined;
    pageSize?: number;
    loading?: boolean | 0;
    showTotalRecord?: boolean;
    titleTotalRecord?: string;
    showCurrentPage?: boolean;
    titleCurrentPage?: string;
    showNumberOfPage?: boolean;
    titleNumberOfPage?: string;
    showPageRange?: boolean;
    showPageSelect?: boolean;
    showPageNumber?: boolean;
    showPageArrow?: boolean;
    bordered?: boolean;
    onPageChange: (current: number, size: number) => void;
}
export declare const Angrid: import("react").MemoExoticComponent<({ className, theme, minHeight, showRowNumber, columnNumberTitle, columns, emptyMessage, rows, totalCount, loading, pageSize, onPageChange, showTotalRecord, titleTotalRecord, showCurrentPage, titleCurrentPage, showNumberOfPage, titleNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, bordered, }: PropsTypes) => JSX.Element>;
