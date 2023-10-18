import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import CreateCar from './CreateCar'
import Car from './Car'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  const [cars, setCars] = useState([])

  useEffect(()=>{
    axios({
       method: "GET",
       url: "/server/cars"
    }).then((res)=>{
      setVeggies(res.data);
    })
  },[])

  return (
    <div>
      <Link to={"/"}>
        <button>Car</button>
      </Link>
      <Link to={"/create/cars"}>
        <button>Create Car</button>
      </Link>
      <Routes>
        <Route path= "/create/cars" element={<CreateCar />}/>
        <Route path= "/" element={<Car/>}/>
      </Routes>
    </div>
  )
}

export default App
