import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './page/Landing/Landing';
import Home from './page/Home/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: '/home',
    element: <Home/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
