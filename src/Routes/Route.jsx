import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ServiceDetails from "../Pages/ServiceDetail/ServiceDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>,
        },
        {
            path:'/service-details/:id',
            element:<ServiceDetails></ServiceDetails>,
            loader:({params})=>fetch(`http://localhost:5000/allServices/${params.id}`)
        },
      ]
    },
  ]);
export default router;