import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Contact from './components/Contact/Contact';
import Details from './components/Details/Details';
import Read from './components/Read/Read';
import Wish from './components/Wish/Wish';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/BookInformation.json'),
        children:[
          {
            index: true,
            element: <Read></Read>,
            loader: () => fetch('/BookInformation.json')
          },
          {
            path: 'wish',
            element: <Wish></Wish>,
            loader: () => fetch('/BookInformation.json')
          }
        ]
      },
      {
        path: '/book/:id',
        element: <Details></Details>,
        loader: () => fetch('../BookInformation.json')
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
