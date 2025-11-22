import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Navbar from "../Components/Navbar";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import PlantDetails from "../Pages/PlantDetails";

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
            }
        ]
    }
])


export default router;