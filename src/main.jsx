import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SignUp from './Components/SignUp.jsx'
// import (RouterProvider, createRoutesFromElements, createBrowserRouter)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='SignUp' element={<SignUp />} />
      {/* <Route path='SignUp' element={<SignIn />} /> */}
      {/* <Route path='/' element={<Protected />} /> */}
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
