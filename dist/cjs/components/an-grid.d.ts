import './angrid.css';
import { locale } from './locale';
export interface RowsType {
    key: string;
    [key: string]: any;
}
export declare type Locale = {
    [key: string]: string;
};
export declare type Lang = keyof typeof locale;
export interface Columns {
    field: string;
    headerName: string;
    description?: string;
    width?: number;
    sortable?: boolean;
    render?: (row: RowsType) => JSX.Element;
}
export interface PropsTypes {
    className?: string;
    theme?: 'dark' | 'light';
    minHeight?: number;
    columns: Columns[];
    rows: RowsType[];
    totalCount: number | undefined;
    pageSize?: number;
    loading?: boolean | 0;
    showTotalRecord?: boolean;
    showCurrentPage?: boolean;
    showNumberOfPage?: boolean;
    showPageRange?: boolean;
    showPageSelect?: boolean;
    showPageNumber?: boolean;
    showPageArrow?: boolean;
    bordered?: boolean;
    textCurrent?: string;
    textTotal?: string;
    textNumber?: string;
    textEmpty?: string;
    rtl?: boolean;
    onPageChange: (current: number, size: number) => void;
}
export declare const Angrid: import("react").MemoExoticComponent<({ className, theme, minHeight, columns, rows, totalCount, loading, pageSize, onPageChange, showTotalRecord, showCurrentPage, showNumberOfPage, showPageRange, showPageSelect, showPageNumber, showPageArrow, bordered, textCurrent, textTotal, textNumber, textEmpty, rtl, }: PropsTypes) => JSX.Element>;
