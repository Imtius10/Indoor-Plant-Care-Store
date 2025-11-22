import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Navbar from "../Components/Navbar";
import Register from "../Pages/Register";
import Home from "../Pages/Home";

const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                index:true,
                Component:Home,
                
            },
            {
                path:'/register',
                Component:Register
            }
        ]
    }
])


export default router;