export interface Props {
    pageSize: number;
    totalCount: number;
}
export interface ReturnType {
    current: number;
    totalPageCount: number;
    pages: number[];
    nextPage: () => void;
    previousPage: () => void;
    selectedPage: (props: number | undefined) => void;
}
/**
 * hooks of pagination grid
 * @param pageSize number of row showing in page
 * @param totalCount length of row data
 * @returns
 */
export declare const usePagination: (pageSize: number, totalCount: number) => ReturnType;
