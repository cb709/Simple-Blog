import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Postdetails from "../Components/Postdetails/Postdetails";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/details',
                element:<Postdetails></Postdetails>
            }
        ]
    }

])