import { createBrowserRouter } from "react-router"
import Apps from "../Pages/Apps"
import Home from "../Pages/Home"
import MainLayout from "../Layouts/MainLayout"
import ErrorPage from "../Pages/ErrorPage"
import Installation from './../Pages/Installation';
import AppDetails from './../Pages/AppDetails';

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-xl"></span></p>,
    children:[

        {
            path: '/',
            Component: Home,
            loader: ()=> fetch('../ApplicationData.json')
        },
        {
            path:'/apps',
            element: <Apps></Apps>
        },
        {
          path:'/installtion',
          Component: Installation
        },
        {
          path:'/app/:id',
          element: <AppDetails></AppDetails>
        }
       
    ]
  },
])

export default router