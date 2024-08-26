import React from "react"
import batmanWeed from './assets/Batmanweed.jpeg'
import  trollFace from './assets/react.png'
import johnPork from './assets/johnporkcalling.webp'
import quandale from './assets/Quandale_Dingle.webp'
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
 } from 'react-router-dom' 
import App from "./App"
import AboutTheCEO from "./AboutTheCEO"

function LandingPage() { 
  

  return (
    <>
        <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={batmanWeed} className="batman-weed" alt="Batman Weed" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={trollFace} className="TrollFace" alt="Trollface" />
    </a>
    <a href="/AboutTheCEO" target="_blank">
      <img src={johnPork} className="johnpork" alt="John Pork" />
    </a>
    <a href="https://google.com" target= "_blank">
      <img src={quandale} className="Quandale" alt= "Quandale"/>
    </a>
    </div>
    <h1>About The Team
    </h1>
    <p className="read-the-docs">
    These are our most skilled developers, working on our website to ensure a great user experience for everyone
    </p>
    
    </>
)

}

export default LandingPage

