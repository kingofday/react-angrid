/* eslint-disable @typescript-eslint/no-unsafe-return */
import { memo, useCallback, useState } from 'react'
import { BiSortDown, BiSortUp } from 'react-icons/bi'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import type { Columns, PropsTypes } from './an-grid'
import { IsEmpty } from './is-empty'
import { Loading } from './loading'

type Props = {
    empty: boolean
    loading: boolean
    sortable: (value: string, sort: boolean) => void
}

const Th = styled.th<Pick<Columns, 'sortable' | 'width'>>`
    cursor: ${({ sortable }): string =>
        typeof sortable === 'boolean' ? 'pointer' : 'default'};
    width: ${({ width }): string =>
        typeof width === 'number' ? `${width}px` : '85px'};
`

export const Main = ({
    showRowNumber,
    columnNumberTitle,
    columns,
    rows,
    empty,
    emptyMessage = 'no data',
    loading,
    className,
    sortable,
}: Partial<PropsTypes> & Props): JSX.Element => {
    const [isSort, setIsSort] = useState<boolean>(false)
    const [isSortField, setIsSortField] = useState<string>('')

    const handleSort = useCallback(
        (value: string): void => {
            setIsSort(!isSort)
            setIsSortField(value)
            sortable(value, isSort)
        },
        [isSort, sortable]
    )

    return (
        <div className={className}>
            {loading && <Loading />}
            <table style={{ width: '100%' }}>
                {!loading && (
                    <>
                        <thead>
                            <tr>
                                {showRowNumber && (
                                    <th style={{ width: 25 }}>
                                        {columnNumberTitle}
                                    </th>
                                )}
                                {columns?.map((column) => (
                                    <Th
                                        className='sort'
                                        key={uuidv4()}
                                        title={column.description}
                                        sortable={column.sortable}
                                        width={column.width}
                                    >
                                        {column.headerName}
                                        {column.sortable && (
                                            <button
                                                type='button'
                                                className='sort-icon'
                                                onClick={(): void =>
                                                    handleSort(column.field)
                                                }
                                            >
                                                {isSort &&
                                                isSortField === column.field ? (
                                                    <BiSortDown />
                                                ) : (
                                                    <BiSortUp />
                                                )}
                                            </button>
                                        )}
                                    </Th>
                                ))}
                            </tr>
                        </thead>

                        {empty ? (
                            <IsEmpty message={emptyMessage} />
                        ) : (
                            <tbody className='tbody'>
                                {rows?.map((row) => (
                                    <tr key={uuidv4()}>
                                        {showRowNumber && (
                                            <td>{rows.indexOf(row) + 1}</td>
                                        )}
                                        {columns?.map((c) => (
                                            <td key={uuidv4()}>
                                                {row[c.field]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </>
                )}
            </table>
        </div>
    )
}

export const Table = memo(Main)
