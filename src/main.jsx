import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Error from './components/Error/Error.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import cartProductsLoader from './loaders/cartProductsLoaders.js';
import CheckOut from './components/CheckOut/CheckOut.jsx';
import Register from './components/Register/Register.jsx';
import AuthProviders from './components/providers/AuthProviders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router= createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path:'orders',
        element: <Orders></Orders>,
        // loader: ()=> fetch('products.json')
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <PrivateRoute> <Inventory></Inventory> </PrivateRoute>
      },
      {
          path: 'checkout',
          element: <PrivateRoute> <CheckOut></CheckOut> </PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} ></RouterProvider>

    </AuthProviders>
  </React.StrictMode>,
)
