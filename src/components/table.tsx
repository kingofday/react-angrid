/* eslint-disable @typescript-eslint/no-unsafe-return */
import { memo } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import type { Columns, Props } from './an-grid'

export const genericMemo: <T>(component: T) => T = memo

const Tr = styled.tr<Pick<Columns, 'sortable' | 'width'>>`
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
}: Props): JSX.Element => (
    <table>
        <thead className='thead'>
            <tr>
                {showRowNumber && (
                    <th style={{ width: 25 }}>{columnNumberTitle}</th>
                )}
            </tr>
            {columns?.map((column) => (
                <Tr
                    key={uuidv4()}
                    title={column.description}
                    sortable={column.sortable}
                    width={column.width}
                >
                    <th>{column.headerName}</th>
                </Tr>
            ))}
        </thead>
        <tbody className='tbody'>
            {rows?.map((row) => (
                <tr key={uuidv4()}>
                    {showRowNumber && <td>{rows.indexOf(row) + 1}</td>}
                    {columns?.map((c) => (
                        <td key={uuidv4()}>{row[c.field]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
)

export const Table = genericMemo(Main)
