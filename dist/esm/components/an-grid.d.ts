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
    defaultPageSize?: number;
    onPageChange: (current: number, size: number) => void;
}
export declare const Angrid: import("react").MemoExoticComponent<({ className, theme, minHeight, showRowNumber, columnNumberTitle, columns, emptyMessage, rows, totalCount, loading, pageSize, defaultPageSize, onPageChange, }: PropsTypes) => JSX.Element>;
