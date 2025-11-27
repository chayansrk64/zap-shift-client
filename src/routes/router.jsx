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
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../pages/Dashboard/AssignRiders/AssignRiders";

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
                loader: () => fetch('serviceCenter.json').then(res =>res.json()),
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
        path: "/",
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
            },
            {
                path: 'payment/:parcelId',
                Component: Payment
            },
            {
                path: 'payment-success',
                Component: PaymentSuccess
            },
            {
                path: 'payment-history',
                Component: PaymentHistory
            },
            {
                path: 'payment-cancelled',
                Component: PaymentCancelled
            },
            {
                path: 'approve-riders',
                element: <AdminRoute> <ApproveRiders></ApproveRiders> </AdminRoute>
            },
            {
                path: 'assign-riders',
                element: <AdminRoute> <AssignRiders></AssignRiders> </AdminRoute>
            },
            {
                path: 'manage-users',
                element: <AdminRoute> <ManageUsers></ManageUsers> </AdminRoute>
            }
        ]
    }
])

export default router;