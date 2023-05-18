import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import AddToy from "../pages/AddToy";

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
                path: "/my-toys",
                element: <MyToys/>
            },
            {
                path: "/add-toy",
                element: <AddToy/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/blog",
                element: <Blog/>
            }
        ]
    }
])

export default Routes