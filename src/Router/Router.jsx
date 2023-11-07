import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import LogIn from '../Pages/Authenticate/LogIn/LogIn';
import SignUp from '../Pages/Authenticate/SignUP/SignUp';
import CheckOut from '../Pages/components/CheckOut/CheckOut';
import Bookings from '../Pages/components/Bookings/Bookings';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/services/:id',
          element:<CheckOut></CheckOut>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<Bookings></Bookings>
        }
      ]
    },
  ]);

  export default router;