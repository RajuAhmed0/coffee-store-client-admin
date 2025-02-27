
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Home/Home";
import Error from "../Pages/Error_Page/Error";
import Coffee_Add from "../Pages/Add_New_Coffee/Coffee_Add";
import Update_Coffee from "../Pages/Update_Existing_Coffee/Update_Coffee";
import Coffee_Details from "../Pages/Coffee_Details_Card/Coffee_Details";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/Add_New_Coffee",
                element: <Coffee_Add></Coffee_Add>,
            },
            {
                path: "/Update_Existing_Coffee",
                element:<Update_Coffee></Update_Coffee>,
            },
            {
                path: "/coffee/:id",
                element: <Coffee_Details></Coffee_Details>,
                loader: ({ params }) => fetch(`http://localhost:4000/coffee/${params.id}`)
            }
            
        ]
    },
]);