import React, { Suspense, useState } from "react";
import './css/App.css'

import BottomNav from './components/BottomNav'
const Landing = React.lazy(() => import("./views/Landing"));
const List = React.lazy(() => import("./views/List"));

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

import "bootstrap-icons/font/bootstrap-icons.css"

export const UserContext = React.createContext(0);

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);


function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="content">
          <RouterProvider router={router} />
        </div>
        <BottomNav />
      </Suspense>
    </>
  )
}

export default App
