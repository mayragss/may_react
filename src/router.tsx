import { createBrowserRouter } from 'react-router-dom'
import { Home } from "./pages/home";
import { Works } from "./pages/works";
//import { Layout } from './components/layout';
import { About } from './pages/about'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/works",
        element: <Works />
    },
    {
        path: "/about",
        element: <About />
    }
]
);

export { router };