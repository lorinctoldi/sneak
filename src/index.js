import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'

import store from "./redux/store";
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

import { Home, Blog, Video, Contact, About, Products } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Home />
    ),
  },
  {
    path: 'blog',
    element: (
      <Blog />
    )
  },
  {
    path: 'video',
    element: (
      <Video />
    )
  },
  {
    path: 'contact',
    element: (
      <Contact />
    )
  },
  {
    path: 'about',
    element: (
      <About />
    )
  },
  {
    path: 'products',
    element: (
      <Products />
    )
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
); 