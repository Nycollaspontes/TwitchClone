

export function LiveChannelItem() {
    return (
        <div id="live" className="p-2 md:p-8">
            <h2>
                <span className="text-[#9147ff]">Live Channels</span>
                we think you like!
            </h2>
            {/* Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
                <LiveChannelItem

                    profile_img='https://static-cdn.jtwm'
                    title='CHARITY STREAM! Any support is ap...'
                    user='Natt'
                    game='Valorant' />
            </div>
        </div>
    )
}