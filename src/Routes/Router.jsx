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
import Error from "../Pages/Error";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                loader: async () => {
                    const res = await fetch("/plants.json");
                    return res.json();
                },
                Component: Home,


            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: "/plantDetails/:id",
                loader: async () => {
                    const res = await fetch("/plants.json");
                    return res.json();
                },
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
                path: '/all-plants',
                loader: async () => {
                    const res = await fetch("/plants.json");
                    return res.json();
                },
                element: (
                    <PrivateRoute>
                        <Plants></Plants>
                    </PrivateRoute>
                )
            },
            {
                path: '/forgot-password',
                Component: ForgetPassword
            }
        ]
    }
])


export default router;