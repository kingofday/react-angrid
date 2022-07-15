import { memo, ReactNode } from 'react'
import styled from 'styled-components'
import './angrid.css'
import { Table } from './table'

export const genericMemo: <T>(component: T) => T = memo
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
}

export interface Props extends PropsTypes {
    rows: RowsType<string | number | ReactNode>[]
}

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
}: Props): JSX.Element => (
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
            rows={rows}
        />
    </Wrapper>
)

export const Angrid = genericMemo(Main)
