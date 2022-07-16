import type { PropsTypes } from './an-grid';
export interface Props {
    pageSize: number;
    totalCount: number;
}
export interface ReturnType {
    totalPageCount: number;
    pages: number[];
}
export declare const usePagination: (totalCount: PropsTypes['totalCount'], pageSize?: PropsTypes['pageSize']) => ReturnType;
