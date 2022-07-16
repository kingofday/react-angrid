import type { PropsTypes } from './an-grid';
declare type Props = {
    empty: boolean;
    loading: boolean;
};
export declare const Main: ({ showRowNumber, columnNumberTitle, columns, rows, empty, emptyMessage, loading, }: Partial<PropsTypes> & Props) => JSX.Element;
export declare const Table: import("react").MemoExoticComponent<({ showRowNumber, columnNumberTitle, columns, rows, empty, emptyMessage, loading, }: Partial<PropsTypes> & Props) => JSX.Element>;
export {};
