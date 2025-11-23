import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Navbar from "../Components/Navbar";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import PlantDetails from "../Pages/PlantDetails";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import PrivateRoute from "../Components/PrivateRoute";
import Plants from "../Pages/Plants";
import ForgetPassword from "../Pages/ForgetPassword";

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
                loader: () => fetch('/plants.json'),
                element: (
                    <PrivateRoute>
                        <PlantDetails />
                    </PrivateRoute>
                )
            },

            {
                path: '/login',
                Component: Login
            },
            {
                path: '/profile',
                Component: Profile
            },
            {
                path:'/all-plants',
                loader: () => fetch('/plants.json'),
                Component:Plants

            },
            {
                path:'/forgot-password',
                Component:ForgetPassword
            }
        ]
    }
])


export default router;