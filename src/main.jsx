import ReactDOM from 'react-dom/client'
import {HelmetProvider} from 'react-helmet-async'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route.jsx';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Provider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto font-DM'>
    <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
      <Toaster/>
    </React.StrictMode>,
  </div>
)
