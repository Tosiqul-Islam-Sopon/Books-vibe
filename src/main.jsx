import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
