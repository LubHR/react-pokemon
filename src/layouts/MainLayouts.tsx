import React from 'react';
import LinksPage from "../pages/LinksPage";
import {Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            <LinksPage/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;