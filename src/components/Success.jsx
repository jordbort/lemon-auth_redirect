export default function Success(props) {
    const { code, scope } = props

    return (
        <>
            <p className='bold message'>Please copy/paste the following into Twitch chat to complete authorization:</p>
            <p className='message'>!authorize {code}</p>
            <button className='bold' onClick={() => navigator.clipboard.writeText(`!authorize ${code}`)}>Copy</button>
        </>
    )
}
