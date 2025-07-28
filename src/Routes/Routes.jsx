import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import MyBookings from "../Pages/MyBookings/MyBookings";
import AllRooms from "../Pages/AllRooms/AllRooms";
import Checkout from "../Pages/Checkout/Checkout";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myBookings',
                element: <PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
            },
            {
                path: '/allRooms',
                element: <AllRooms></AllRooms>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            }
        ]
    }
])

export default Routes;