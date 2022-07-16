/* eslint-disable @typescript-eslint/no-unsafe-return */
import { memo } from 'react'
import { BiSortDown } from 'react-icons/bi'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import type { Columns, PropsTypes } from './an-grid'
import { IsEmpty } from './is-empty'
import { Loading } from './loading'

type Props = {
    empty: boolean
    loading: boolean
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
}: Partial<PropsTypes> & Props): JSX.Element => (
    <div className={className}>
        {loading && <Loading />}
        <table style={{ width: '100%' }}>
            {empty && !loading && <IsEmpty message={emptyMessage} />}
            {!empty && !loading && (
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
                                    <button
                                        type='button'
                                        className='sort-icon'
                                        onClick={(): void =>
                                            console.log(column.field)
                                        }
                                    >
                                        <BiSortDown />
                                    </button>
                                </Th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {rows?.map((row) => (
                            <tr key={uuidv4()}>
                                {showRowNumber && (
                                    <td>{rows.indexOf(row) + 1}</td>
                                )}
                                {columns?.map((c) => (
                                    <td key={uuidv4()}>{row[c.field]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </>
            )}
        </table>
    </div>
)

export const Table = memo(Main)
