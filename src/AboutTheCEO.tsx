import { useState } from 'react'
import ceo from './assets/ceo.jpeg'
import './App.css'

function AboutTheCEO() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Our CEO
    </h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ceo} className="ceo" alt="Batman Weed" />
        </a>
      </div>
      <h2>
        Our CEO, Johnathan Porkius, is a famous philanthropist, music producer, chef, and celebrity. He has conntributed to thousands of humanitarian causes including rescuing victims of the flooding in Pakistan.
      </h2>
      
      
    </>
  )
}

export default AboutTheCEO;
