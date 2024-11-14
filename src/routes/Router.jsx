import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Statistics from "../pages/Statistics.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Products from "../components/productCategory/Products.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch("../category.json"),
                children:[
                    {
                        path: "/category/:category",
                        loader: ()=> fetch("../products.json"),
                        element: <Products></Products>
                    }
                ]
            },
            {
                path: "/stat",
                element: <Statistics></Statistics>
            },
            {
                path: "/dash",
                element: <Dashboard></Dashboard>
            }
        ]
    }
])


export default router;