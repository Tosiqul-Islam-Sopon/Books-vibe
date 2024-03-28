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
import BookDetails from './Components/BookDetails/BookDetails';
import RecomendedBooks from './Components/RecomendedBooks/RecomendedBooks';
import AuthorSpotlight from './Components/AuthorSpotlight/AuthorSpotlight';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: "/RecomendedBooks",
        element: <RecomendedBooks></RecomendedBooks>
      },
      {
        path: "/AuthorSpotlight",
        element: <AuthorSpotlight></AuthorSpotlight>
      },
      {
        path: '/BookDetails/:id',
        element: <BookDetails ></BookDetails>,
        loader: () => fetch('books.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
