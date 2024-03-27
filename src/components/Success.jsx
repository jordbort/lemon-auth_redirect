export default function Success(props) {
    const { code, scope } = props

    async function copyCode() {
        try { await navigator.clipboard.writeText(`!authorize ${code}`) }
        catch (err) { console.error(`Failed to copy code:`, err) }
    }

    return (
        <>
            <p className='bold message'>Please copy/paste the following into Twitch chat to complete authorization:</p>
            <p className='message'>!authorize {code}</p>
            <button className='bold button' onClick={copyCode}>Copy</button>
        </>
    )
}
