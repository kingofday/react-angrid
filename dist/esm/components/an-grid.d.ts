import { ReactNode } from 'react';
import './angrid.css';
export declare const genericMemo: <T>(component: T) => T;
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
}
export interface Props extends PropsTypes {
    rows: RowsType<string | number | ReactNode>[];
}
export declare const Angrid: ({ className, theme, minHeight, showRowNumber, columnNumberTitle, columns, emptyMessage, rows, }: Props) => JSX.Element;
