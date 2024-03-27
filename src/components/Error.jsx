export default function Error(props) {
    const { error, errorDescription } = props

    return <p className='error message'><span className='bold'>Error:</span> {error}. {errorDescription}</p>
}
