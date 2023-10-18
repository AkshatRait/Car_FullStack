import axios from "axios";
import React, { useEffect, useState } from "react";

const Cars = () => {
    const [cars,setCars] = useState([]);

    useEffect(()=>{
        axios({
            method: 'GET',
            url: '/server/cars',
        }).then((res)=>{
            setCars(res.data)
         })
    },[])

  return (
    <>
    <div> 
      <h1>Show cars here:</h1>
        <ul> 
          {cars.map((car)=>{
            return (
                <div style={{backgroundColor:"gray",
                padding:"5px"}}>
                    <h2>{car.name}</h2>
                    <h3>{car.model}</h3>
                    <h3>{car.make}</h3>
                    <h3>{car.color}</h3>
                    <img style={{width: "200px"}}src={car.url} alt={car.model}></img>
                </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Cars;
