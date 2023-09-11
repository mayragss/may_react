import { createBrowserRouter } from 'react-router-dom'
import { Home } from "./pages/Main"; 
import { Curriculum } from "./pages/Curriculum"; 
import { Error } from "./pages/Error"; 
import { Work } from "./pages/Works"; 
import { About } from "./pages/About"; 
import { MenuFloat } from "./components/MenuFloat";

const router = createBrowserRouter([ 
    {
        element: <MenuFloat />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/projects",
                element: <Work />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/resume",
                element: <Curriculum />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    }
]
);

export { router };