import { createBrowserRouter } from "react-router"
import Apps from "../Pages/Apps"
import Home from "../Pages/Home"
import MainLayout from "../Layouts/MainLayout"
import ErrorPage from "../Pages/ErrorPage"
import Installation from './../Pages/Installation';

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
        {
          path:'/installation',
          element:<Installation></Installation>
        }
       
    ]
  },
])

export default router