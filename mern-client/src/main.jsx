import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routers/router.jsx';
import AuthProviders from './contacts/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProviders>
    <RouterProvider router={router}/>
   </AuthProviders>
  </React.StrictMode>
);