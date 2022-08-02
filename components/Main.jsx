import { LiveChannels } from "./LiveChannels";
import {Hero} from './Hero';
import { IconBar } from "./IconBar";

export function Main() {
    return (
        <div className='absolute left-[64px] xl:left-[220px]' >
            <Hero />
            <LiveChannels />
            <IconBar />
        </div>
    )
}