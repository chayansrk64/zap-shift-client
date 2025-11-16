import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

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
                path: '/coverage',
                loader: () => fetch('serviceCenter.json').then(res =>res.json()),
                Component: Coverage,
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>
            }
        ]
    }
])

export default router;