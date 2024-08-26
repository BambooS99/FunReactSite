import { useState } from 'react'

import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
 } from 'react-router-dom' 
import AboutTheCEO from './AboutTheCEO';
import './App.css'
import LandingPage from './LandingPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/AboutTheCEO' element={<AboutTheCEO />}>
      <Route path='/' element={<LandingPage />} />
      </Route>
    )
  );

  return ( 

    <>
    
    <RouterProvider router={router} />
    </>
  )
  
}



export default App
