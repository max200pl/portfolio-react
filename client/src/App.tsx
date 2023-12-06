import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root/Root";
import { FC } from "react";
import Intro from "./pages/Intro/Intro";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Intro />,
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