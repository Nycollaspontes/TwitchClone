import { CategoriesItem } from "./CategoriesItem";
export function Categories() {
    return (
        <div id='categories' className='p-2 md:p-8'>
            <h2 className='text-xl font-bold px-2'>
                <span className='text-[#9147ff]'>Categories</span> we think you&apos;ll
                like
            </h2>
            {/* Container */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2 text-sm">
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg'
                    title='Just Chatting'
                    viewers='369k'
                    tag1='IRL'
                />
                {/* CategoriesItem2 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg'
                    title='Grand Theft Auto'
                    viewers='159k'
                    tag1='Adventure'
                    tag2='FPS' />
                {/* CategoriesItem3 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg'
                    title='League of Legends'
                    viewers='139k'
                    tag1='MOBA'
                    tag2='Action' />
                {/* CategoriesItem4 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg'
                    title='VALORANT'
                    viewers='183k'
                    tag1='Shotter'
                    tag2='FPS' />
                {/* CategoriesItem5 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg'
                    title='CS-GO'
                    viewers='75.2K'
                    tag1='FPS'
                    tag2='Shotter' />
                {/* CategoriesItem6 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg'
                    title='Fortnite'
                    viewers='64.2k'
                    tag1='Shotter'
                    tag2='Action' />
                {/* CategoriesItem7 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg'
                    title='Teamfight Tactics'
                    viewers='50.8k'
                    tag1='Strategy' />
                {/* CategoriesItem8 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/1869092879_IGDB-285x380.jpg'
                    title='FIFA 22'
                    viewers='24k'
                    tag1='Sports Game' />
                {/* CategoriesItem9 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/417752-285x380.jpg'
                    title='Talk Show & Podcasts'
                    viewers='7.2k'
                    tag1='IRL'
                />
                {/* CategoriesItem10 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg'
                    title='Dota2'
                    viewers='55.2k'
                    tag1='MOBA'
                    tag2='Action'
                />
                {/* CategoriesItem11 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/19619_IGDB-285x380.jpg'
                    title='Tibia'
                    viewers='5.4k'
                    tag1='Adventure'
                    tag2='RPG'
                />
                {/* CategoriesItem12 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg'
                    title='Music'
                    viewers='30k'
                    tag1='IRL'
                    tag2='Creative'
                />
                {/* CategoriesItem13 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg'
                    title='Call of Duty: Warzone'
                    viewers='102.2k'
                    tag1='FPS'
                    tag2='Shooter'
                />
                {/* CategoriesItem14 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg'
                    title='Dead by Daylight'
                    viewers='50k'
                    tag1='Action'
                    tag2='Horror'
                />
                {/* CategoriesItem15 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/493959_IGDB-285x380.jpg'
                    title='Red Dead Redemption 2'
                    viewers='9.9k'
                    tag1='Action'
                    tag2='Adventure Game'
                />
                {/* CategoriesItem16 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/460630-285x380.jpg'
                    title='Rainbow Six Siege'
                    viewers='8.7k'
                    tag1='FPS'
                    tag2='Shooter'
                />
                {/* CategoriesItem17 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg'
                    title='Hearthstone'
                    viewers='25k'
                    tag1='Card & Board Game'
                />
                {/* CategoriesItem18 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/510218_IGDB-285x380.jpg'
                    title='Among Us'
                    viewers='1.3k'
                    tag1='Strategy'
                    tag2='Survival'
                />
                {/* CategoriesItem19 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/502732_IGDB-285x380.jpg'
                    title='Free Fire'
                    viewers='90k'
                    tag1='Mobile Game'
                />
                {/* CategoriesItem20 */}
                <CategoriesItem
                    img='https://static-cdn.jtvnw.net/ttv-boxart/459064_IGDB-285x380.jpg'
                    title='Cuphead'
                    viewers='10k'
                    tag1='Platformer'
                    tag2='Indie Game'
                />
            </div>
        </div>
    )
}