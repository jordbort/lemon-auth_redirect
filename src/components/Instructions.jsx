export default function Instructions() {
    const tokenScope = [
        `channel:manage:polls`,
        `channel:manage:vips`,
        `channel:read:subscriptions`,
        `moderator:manage:announcements`,
        `moderator:manage:shoutouts`,
        `moderator:read:followers`,
        `moderator:read:shoutouts`,
        `moderation:read`,
        `bits:read`
    ]

    return (
        <>
            <p className='message'>Click the "Authorize" button to give lemony_friend access to your Twitch account.</p>
            <form action='https://id.twitch.tv/oauth2/authorize'>
                <input type='hidden' name='response_type' value='code' />
                <input type='hidden' name='client_id' value='gdjv4q6wmt34j3ajx6w8wdgrj1oyax' />
                <input type='hidden' name='redirect_uri' value='https://lemony-friend.netlify.app' />
                <input type='hidden' name='scope' value={tokenScope.join(` `)} />
                <input className='bold button' type='submit' value='Authorize' />
            </form>
        </>
    )
}
