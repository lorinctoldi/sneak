import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import { Home, Blog, Video, Contact } from './pages'

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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);