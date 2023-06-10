import React, { Suspense, useState } from "react";
import './css/App.css'

import BottomNav from './components/BottomNav'
const Landing = React.lazy(() => import("./views/Landing"));
const Pinned = React.lazy(() => import("./views/Pinned"));
const Notice = React.lazy(() => import("./views/Notice"));

import "bootstrap/dist/js/bootstrap.bundle.min"

// import { Container } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css'



export const UserContext = React.createContext(0);

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="content">
          <Routes>            
            <Route path="/" element={<Landing />} />
            <Route path="/pinned" element={<Pinned />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
        <BottomNav />
      </Suspense>
    </>
  )
}

function NoMatch() {
  return <div>Page not found</div>
}

export default App
