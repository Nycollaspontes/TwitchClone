import { Main } from "./Main";
import { Sidemenu } from "./Sidemenu";


export function Layout() {
    return (
        <div className = 'pt-[60px] flex w-full'>
            <Sidemenu />
            <Main />
        </div>
    )
}