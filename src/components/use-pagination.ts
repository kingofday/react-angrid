import { useState } from 'react'

export interface Props {
    pageSize: number
    totalCount: number
}

export interface ReturnType {
    current: number
    totalPageCount: number
    pages: number[]
    nextPage: () => void
    previousPage: () => void
    selectedPage: (props: number | undefined) => void
}

/**
 * hooks of pagination grid
 * @param pageSize number of row showing in page
 * @param totalCount length of row data
 * @returns
 */
export const usePagination = (
    pageSize: number,
    totalCount: number
): ReturnType => {
    const [current, setCurrent] = useState(1)
    const pages = []

    const selectedPage = (props: number | undefined): void => {
        if (props) {
            setCurrent(props)
        }
    }

    const totalPageCount = Math.ceil(totalCount / pageSize)

    const nextPage = (): void => {
        if (current < totalPageCount) {
            setCurrent(current + 1)
        }
    }
    const previousPage = (): void => {
        if (current > 1) {
            setCurrent(current - 1)
        }
    }

    for (let index = 1; index <= totalPageCount; index += 1) {
        pages.push(index)
    }

    return {
        totalPageCount,
        nextPage,
        previousPage,
        selectedPage,
        current,
        pages,
    }
}
