import { LiveChannels } from "./LiveChannels";
import {Hero} from './Hero';

export function Main() {
    return (
        <div className='absolute left-[64px] xl:left-[220px]' >
            <Hero />
            <LiveChannels />
        </div>
    )
}