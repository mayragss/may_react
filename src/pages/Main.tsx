import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/style/Main.css'

import { useState } from 'react'

export function Home() {

    const [menu, setMenu] = useState(false);

    function openButtons() {

        setMenu(menu ? false : true);
    }

    return (
        <>
            <div className='tittle-container'>
                <p className='tittle glow'>Mayra</p>
                <p className='tittle-shadow'> Mayra</p>
                <p className='role'>SOFTWARE DEVELOPER</p>
            </div>

        </>
    )
} 