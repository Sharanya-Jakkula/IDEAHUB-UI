import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
// import { Footer } from "antd/es/layout/layout";

export default function Body(){
    return(
        <div>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            {/* <Footer/> */}
        </div>
    );
}