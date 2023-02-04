import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

import { Home, Blog, Video, Contact, About } from './pages'

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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
); 