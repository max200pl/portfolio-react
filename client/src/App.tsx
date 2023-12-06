import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root/Root";
import { FC } from "react";
import Intro from "./pages/Intro/Intro";
import About from "./pages/About/About";


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
                path: '/gallery',
                element: <About />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ]
    },
    // {
    //     path: 'auth',
    //     element: <Auth />,
    // },
]);

const App: FC = () =>
    <RouterProvider router={router} />

export default App;