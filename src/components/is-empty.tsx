import { EmptyIcon } from './icons'

// todo type from angrid component
export type IsEmptyProps = {
    className?: string
    message: string
}

export const IsEmpty: React.FC<IsEmptyProps> = ({ message = 'No Data' }) => (
    <div className='isEmpty'>
        <EmptyIcon />
        <div
            style={{
                color: 'rgb(149 147 147)',
                textAlign: 'center',
            }}
        >
            {message}
        </div>
    </div>
)
