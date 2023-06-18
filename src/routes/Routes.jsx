import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import AddToy from "../pages/AddToy";
import RequiredLogin from "../private/RequiredLogin";
import ToyDetails from "../pages/ToyDetails";
import EditToy from "../pages/EditToy";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {   
                path : "/all-toys",
                element: <AllToys/>

            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/my-toys",
                element: <RequiredLogin><MyToys/></RequiredLogin>
            },
            {
                path: "/add-toy",
                element:  <RequiredLogin><AddToy/></RequiredLogin>
            },
            {
                path: "/toy/:id",
                element: <RequiredLogin><ToyDetails/></RequiredLogin>
            },
            {
                path: "/edit-toy/:id/edit",
                element: <RequiredLogin><EditToy/></RequiredLogin>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
])

export default Routes