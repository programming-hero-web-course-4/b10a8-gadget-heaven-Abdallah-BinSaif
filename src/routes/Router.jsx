import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Statistics from "../pages/Statistics.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Products from "../components/productCategory/Products.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Wishlist from "../components/dashboard/Wishlist.jsx";
import Carts from "../components/dashboard/Carts.jsx";
import ErrorPage from "../components/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch("../category.json"),
                children:[
                    {
                        path: "/",
                        loader: ()=> fetch("../products.json"),
                        element: <Products></Products>
                    },
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
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dash/cart",
                        element:<Carts></Carts>
                    },
                    {
                        path: "/dash/wish",
                        element: <Wishlist></Wishlist>
                    }
                ]
            },
            {
                path: "/detail/:id",
                loader: ()=> fetch("../products.json"),
                element: <ProductDetails></ProductDetails>
            }
        ]
    }
])


export default router;