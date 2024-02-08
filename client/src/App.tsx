import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root/Root";
import { FC } from "react";
import Intro from "./pages/Intro/Intro";
import About from "./pages/About/About";
import AuthSignIn from "./pages/Auth/AuthSignIn/AuthSignIn";
import AuthSignUp from "./pages/Auth/AuthSignUp/AuthSignUp";


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
                        element: <AuthSignIn />
                    },
                    {
                        path: 'sign-up',
                        element: <AuthSignUp />
                    }
                ]
            },
        ]
    },
]);

const App: FC = () =>
    <RouterProvider router={router} />

export default App;