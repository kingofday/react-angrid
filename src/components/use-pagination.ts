import type { PropsTypes } from './an-grid'

export interface Props {
    pageSize: number
    totalCount: number
}

export interface ReturnType {
    totalPageCount: number
    pages: number[]
}

export const usePagination = (
    totalCount: PropsTypes['totalCount'],
    pageSize: PropsTypes['pageSize'] = 1
): ReturnType => {
    const pages = []

    const totalPageCount =
        typeof totalCount === 'number' && totalCount > pageSize
            ? Math.ceil(totalCount / pageSize)
            : 1

    for (let index = 1; index <= totalPageCount; index += 1) {
        pages.push(index)
    }

    return {
        totalPageCount,
        pages,
    }
}
