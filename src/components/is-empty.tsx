import type { Locale } from './an-grid'
import { EmptyIcon } from './icons'

export type IsEmptyProps = {
    className?: string
    lang: Locale
}

export const IsEmpty: React.FC<IsEmptyProps> = ({ lang }) => (
    <div className='isEmpty'>
        <EmptyIcon />
        <div
            style={{
                color: 'rgb(149 147 147)',
                textAlign: 'center',
            }}
        >
            {lang.empty}
        </div>
    </div>
)
