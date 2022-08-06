/* eslint-disable @typescript-eslint/no-unsafe-return */
import { memo, useCallback, useState } from 'react'
import type { PropsTypes } from './an-grid'
import { BiSortDown, BiSortUp } from './icons'
import { IsEmpty } from './is-empty'
import { Loading } from './loading'

type Props = Partial<PropsTypes> & {
    empty: boolean
    loading: boolean
    sortable: (value: string, sort: boolean) => void
}

export const Main = ({
    // showRowNumber,
    // columnNumberTitle,
    columns,
    rows,
    empty,
    textEmpty,
    loading,
    className,
    rtl,
    sortable,
}: Props): JSX.Element => {
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
                                {/* {showRowNumber && (
                                    <th style={{ width: 25 }}>
                                        {columnNumberTitle}
                                    </th>
                                )} */}
                                {columns?.map((column) => (
                                    <th
                                        className='sort'
                                        key={column.field}
                                        title={column.description}
                                        style={{
                                            width: column.width,
                                        }}
                                    >
                                        {column.headerName}
                                        {column.sortable && (
                                            <button
                                                type='button'
                                                className={rtl ? 'rtl' : 'ltr'}
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
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className='tbody'>
                            {!empty &&
                                rows?.map((row) => (
                                    <tr key={row.key}>
                                        {/* {showRowNumber && (
                                            <td>{rows.indexOf(row) + 1}</td>
                                        )} */}
                                        {columns?.map((c) => (
                                            <td key={c.field}>
                                                {c.render
                                                    ? c.render(row)
                                                    : row[c.field]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            {empty && (
                                <tr>
                                    <td>
                                        {empty && (
                                            <IsEmpty textEmpty={textEmpty} />
                                        )}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </>
                )}
            </table>
        </div>
    )
}

export const Table = memo(Main)
