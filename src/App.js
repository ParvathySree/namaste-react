import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Header from "./components/Header";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestoMenu from "./components/RestoMenu";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter(
    [   
        {
            path : "/",
            element : <AppLayout/>,
            errorElement : <Error/>,
            children : [
                {
                    path : "/",
                    element  : <Body/>
                },
                {
                    path : "/about",
                    element  : <About/>
                },
                {
                    path : "/contact",
                    element  : <Contact/>
                },
                {
                    path:"/restaurants/:resId",
                    element : <RestoMenu/>
                }

            ]
        },
        
        
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router = {appRouter}/>)