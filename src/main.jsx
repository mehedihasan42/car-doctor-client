import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Router/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='max-w-7xl mx-auto'>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     </div>
  </React.StrictMode>,
)
