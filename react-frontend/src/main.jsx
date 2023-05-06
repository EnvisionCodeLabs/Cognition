import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './page/Landing/Landing';
import Home from './page/Home/Home';
import Create from './page/Create/Create';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/create',
    element: <Create/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
