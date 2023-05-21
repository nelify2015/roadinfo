import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
// import File System Module
import fs from "fs"; 
  
// import xml2js Module
import { parseString } from "xml2js"; 

function App() {
  const [roadInfo, setRoadInfo] = useState(0)

  const getRoadInfo = () => {
    axios.get('https://resource.data.one.gov.hk/td/jss/Journeytimev2.xml')
      .then((data) => {
        setRoadInfo(data.data)
      })
  }

  const showData = () => {
    console.log(roadInfo)
  }

  return (
    <>
      <button onClick={getRoadInfo}>Road Info</button>
      <button onClick={showData}>Show</button>
    </>
  )
}

export default App
