export const EmptyIcon = (): JSX.Element => (
    <img
        alt='empty'
        src='data:image/png;base64,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'
    />
)

export function BiSortUp(): JSX.Element {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            fill='currentColor'
            stroke='currentColor'
            strokeWidth='0'
            viewBox='0 0 24 24'
        >
            <path
                stroke='none'
                d='M11 9h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5zm-6 3h2V8h3L6 4 2 8h3z'
            />
        </svg>
    )
}

export function BiSortDown(): JSX.Element {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            fill='currentColor'
            stroke='currentColor'
            strokeWidth='0'
            viewBox='0 0 24 24'
        >
            <path
                stroke='none'
                d='M6 20l4-4H7V4H5v12H2zm5-12h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5z'
            />
        </svg>
    )
}

export function FiChevronLeft(): JSX.Element {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
        >
            <path d='M15 18L9 12 15 6' />
        </svg>
    )
}

export function FiChevronRight(): JSX.Element {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
        >
            <path d='M9 18L15 12 9 6' />
        </svg>
    )
}
