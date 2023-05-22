import React, { Suspense, useState } from "react";
import './css/App.css'
const Landing = React.lazy(() => import("./views/Landing"));
const List = React.lazy(() => import("./views/List"));

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
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App
