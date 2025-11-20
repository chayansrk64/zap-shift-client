import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/", 
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'rider',
                element: <PrivateRoute> <Rider></Rider> </PrivateRoute>
            },
            {
                path: 'send-parcel',
                loader: () => fetch('serviceCenter.json').then(res =>res.json()),
                element: <PrivateRoute> <SendParcel></SendParcel> </PrivateRoute>,
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>
            },
            {
                path: 'coverage',
                loader: () => fetch('serviceCenter.json').then(res =>res.json()),
                Component: Coverage,
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "register",
                Component: Register
            },
            {
                path: "login",
                Component: Login
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        children: [
            {
                path: 'my-parcels',
                Component: MyParcels
            }
        ]
    }
])

export default router;