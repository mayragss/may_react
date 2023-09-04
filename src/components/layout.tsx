import { Outlet } from 'react-router-dom';

export function Layout(){
    return(
        <>
            <Outlet/>
            <footer>
                <span>Todos os direitos reservados.</span>
            </footer>
        </>
    );
}