import { memo, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import './angrid.css'
import { Paginate } from './paginate'
import { Table } from './table'

export interface RowsType<T> {
    [key: string]: T
}
export interface Columns {
    field: string
    headerName: string
    description?: string
    width?: number
    sortable?: boolean
}
export interface PropsTypes {
    className?: string
    theme?: 'dark' | 'light'
    minHeight?: number
    emptyMessage?: string
    columnNumberTitle?: string
    showRowNumber: boolean
    columns: Columns[]
    rows: RowsType<string | number | ReactNode>[]
    totalCount: number | undefined
    pageSize?: number
    loading?: boolean | 0
    showTotalRecord?: boolean
    titleTotalRecord?: string
    showCurrentPage?: boolean
    titleCurrentPage?: string
    showNumberOfPage?: boolean
    titleNumberOfPage?: string
    showPageRange?: boolean
    showPageSelect?: boolean
    showPageNumber?: boolean
    showPageArrow?: boolean
    onPageChange: (current: number, size: number) => void
}

const range = [10, 20, 50, 100, 200, 500]

const Wrapper = styled.div<Pick<PropsTypes, 'minHeight'>>`
    min-height: ${({ minHeight }): string =>
        typeof minHeight === 'number' ? `${minHeight}px` : '300px'};
    display: grid;
`

const Main = ({
    className = '',
    theme = 'light',
    minHeight = 300,
    showRowNumber,
    columnNumberTitle = '#',
    columns = [],
    emptyMessage = 'No Data',
    rows = [],
    totalCount = 1,
    loading = 0,
    pageSize = 20,
    onPageChange,
    showTotalRecord = false,
    titleTotalRecord = 'Total Record',
    showCurrentPage = false,
    titleCurrentPage = 'Current Page',
    showNumberOfPage = false,
    titleNumberOfPage = 'Number of Page',
    showPageRange = true,
    showPageSelect = true,
    showPageNumber = true,
    showPageArrow = true,
}: PropsTypes): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    const [isRow, setIsRow] = useState<PropsTypes['rows']>([])
    const [isSize, setIsSize] = useState(20)

    useEffect(() => {
        if (typeof loading !== 'number') {
            setIsLoading(loading)
            if (rows.length === 0) {
                setIsEmpty(true)
            } else {
                setIsEmpty(false)
                setIsRow(rows)
            }
        } else {
            setIsLoading(false)
            if (rows.length === 0) {
                setIsEmpty(true)
            } else {
                setIsEmpty(false)
                setIsRow(rows)
            }
        }
    }, [loading, rows])

    useEffect(() => {
        if (pageSize && range.includes(pageSize)) {
            setIsSize(pageSize)
        }
    }, [pageSize])

    return (
        <Wrapper
            className={`angrid ${theme} ${className} ${
                rows.length === 0 ? 'is-empty' : 'not-empty'
            }`}
            minHeight={minHeight}
        >
            <Table
                showRowNumber={showRowNumber}
                columnNumberTitle={columnNumberTitle}
                columns={columns}
                emptyMessage={emptyMessage}
                rows={isRow}
                empty={isEmpty}
                loading={isLoading}
            />

            {!isEmpty && totalCount > pageSize && (
                <Paginate
                    totalCount={totalCount}
                    pageSize={isSize}
                    onPageChange={onPageChange}
                    range={range}
                    showTotalRecord={showTotalRecord}
                    titleTotalRecord={titleTotalRecord}
                    showCurrentPage={showCurrentPage}
                    titleCurrentPage={titleCurrentPage}
                    showNumberOfPage={showNumberOfPage}
                    titleNumberOfPage={titleNumberOfPage}
                    showPageRange={showPageRange}
                    showPageSelect={showPageSelect}
                    showPageNumber={showPageNumber}
                    showPageArrow={showPageArrow}
                />
            )}
        </Wrapper>
    )
}

export const Angrid = memo(Main)
