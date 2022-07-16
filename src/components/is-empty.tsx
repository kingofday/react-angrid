// todo type from angrid component
export type IsEmptyProps = {
    className?: string
    message: string
}

export const IsEmpty: React.FC<IsEmptyProps> = ({ message = 'No Data' }) => (
    <div>
        <span>{message}</span>
    </div>
)
