/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useEffect, useState } from 'react'
import './angrid.css'
import { locale } from './locale'
import { Paginate } from './paginate'
import { Table } from './table'

export interface RowsType {
    key: string,
    [key: string]: any
}

export type Locale = {
    [key: string]: string
}

export type Lang = keyof typeof locale
export interface Columns {
    field: string
    headerName: string
    description?: string
    width?: number
    sortable?: boolean
    render?: (row: RowsType) => JSX.Element
}
export interface PropsTypes {
    className?: string
    theme?: 'dark' | 'light'
    minHeight?: number
    // columnNumberTitle?: string
    // showRowNumber: boolean
    columns: Columns[]
    rows: RowsType[]
    totalCount: number | undefined
    pageSize?: number
    loading?: boolean | 0
    showTotalRecord?: boolean
    showCurrentPage?: boolean
    showNumberOfPage?: boolean
    showPageRange?: boolean
    showPageSelect?: boolean
    showPageNumber?: boolean
    showPageArrow?: boolean
    bordered?: boolean
    textCurrent?: string
    textTotal?: string
    textNumber?: string
    textEmpty?: string
    rtl?: boolean
    onPageChange: (current: number, size: number) => void
}

const range = [10, 20, 50, 100, 200, 500]

const Main = ({
    className = '',
    theme = 'light',
    minHeight = 300,
    // showRowNumber,
    // columnNumberTitle = '#',
    columns,
    rows,
    totalCount,
    loading = 0,
    pageSize = 20,
    onPageChange,
    showTotalRecord = false,
    showCurrentPage = false,
    showNumberOfPage = false,
    showPageRange = true,
    showPageSelect = true,
    showPageNumber = true,
    showPageArrow = true,
    bordered = false,
    textCurrent = locale.fa.current,
    textTotal = locale.fa.total,
    textNumber = locale.fa.number,
    textEmpty = locale.fa.empty,
    rtl = false,
}: PropsTypes): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    const [isRow, setIsRow] = useState<PropsTypes['rows']>([])
    const [isSize, setIsSize] = useState(pageSize)
    const sortRows = useCallback(
        (value: string, desc: boolean): void => {
            const sort = rows.sort((a, b) => {
                if (!desc) {
                    return b[value] > a[value] ? 1 : -1
                }

                return a[value] > b[value] ? 1 : -1
            })

            setIsRow(sort)
        },
        [rows]
    )

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
        <div
            className={`angrid ${theme} ${className}`}
            style={{ minHeight: `${minHeight}px` }}
        >
            <div className='asax'>
                <Table
                    textEmpty={textEmpty}
                    rtl={rtl}
                    className={bordered ? 'bordered' : ''}
                    // showRowNumber={showRowNumber}
                    // columnNumberTitle={columnNumberTitle}
                    columns={columns}
                    rows={isRow}
                    empty={isEmpty}
                    loading={isLoading}
                    sortable={(value: string, sort: boolean): void =>
                        sortRows(value, sort)
                    }
                />

                {!isEmpty && (
                    <Paginate
                        textCurrent={textCurrent}
                        textTotal={textTotal}
                        textNumber={textNumber}
                        rtl={rtl}
                        totalCount={totalCount}
                        pageSize={isSize}
                        onPageChange={onPageChange}
                        range={range}
                        showTotalRecord={showTotalRecord}
                        showCurrentPage={showCurrentPage}
                        showNumberOfPage={showNumberOfPage}
                        showPageRange={showPageRange}
                        showPageSelect={showPageSelect}
                        showPageNumber={showPageNumber}
                        showPageArrow={showPageArrow}
                    />
                )}
            </div>
        </div>
    )
}

export const Angrid = memo(Main)
