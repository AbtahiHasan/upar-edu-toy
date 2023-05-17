import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/blog",
                element: <Blog/>
            }
        ]
    }
])

export default Routes