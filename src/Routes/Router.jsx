import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Navbar from "../Components/Navbar";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import PlantDetails from "../Pages/PlantDetails";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                loader: () => fetch('/plants.json'),
                Component: Home,


            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: "/plantDetails/:id",
                loader:()=>fetch('/plants.json'),
                element: <PlantDetails />
            },
           
            {
                path:'/login',
                Component:Login
            }
        ]
    }
])


export default router;