import { ReactElement } from 'react';
import type { Columns, RowsType } from './an-grid';
export interface RowProps<T> {
    index: number;
    row: RowsType<T>;
    column: Columns;
}
export declare const Rows: <T>({ row, index, column }: RowProps<T>) => ReactElement;
