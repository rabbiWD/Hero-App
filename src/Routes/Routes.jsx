import { createBrowserRouter } from "react-router"
import Apps from "../Pages/Apps"
import Home from "../Pages/Home"
import MainLayout from "../Layouts/MainLayout"
import ErrorPage from "../Pages/ErrorPage"

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[

        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/apps',
            element: <Apps></Apps>
        },
       
    ]
  },
])

export default router