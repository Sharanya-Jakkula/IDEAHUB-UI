import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Body(){
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-grow mt-[120px]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}