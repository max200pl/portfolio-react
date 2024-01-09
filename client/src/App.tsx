import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root/Root";
import { FC } from "react";
import Intro from "./pages/Intro/Intro";
import About from "./pages/About/About";
import Auth from "./pages/Auth/Auth";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Intro />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/gallery',
                element: <About />,
            },
            {
                path: '/auth',
                children: [
                    {
                        path: 'login',
                        element: <Auth />
                    }
                ]
            },
        ]
    },
]);

const App: FC = () =>
    <RouterProvider router={router} />

export default App;