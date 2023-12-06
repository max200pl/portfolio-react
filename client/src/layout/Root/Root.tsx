
import { FC } from "react";
import Header from "../Header/Header";
import { Outlet } from 'react-router-dom';

import "./Root.scss";


const Root: FC = () => {
    return (
        <div className="root_layout">
            <Header />

            <main className="main">
                <div className="main__content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Root;
