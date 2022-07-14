import { ReactElement, useState } from 'react'
import styled from 'styled-components'

export interface Props {
    className?: string
    theme?: 'dark'
    minHeight?: number
}

const Wrapper = styled.div<Props>`
    min-height: ${(props): string =>
        typeof props.minHeight === 'number' ? `${props.minHeight}px` : '300px'};
    display: grid;
`

export const Angrid = (props: Props): ReactElement => {
    const [rows, setRows] = useState([])
    const { className, theme, minHeight } = props

    return (
        <Wrapper
            className={`angrid ${theme || 'light'} ${className || 'no-class'} ${
                rows.length === 0 ? 'is-empty' : 'not-empty'
            }`}
            minHeight={minHeight}
        >
            12121
        </Wrapper>
    )
}

const defaultProps: Props = {
    className: '',
    theme: 'dark',
    minHeight: 300,
}

Angrid.defaultProps = defaultProps
