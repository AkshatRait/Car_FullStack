import axios from "axios";
import React, { useState } from "react";

const CreateCar = () => {
    const [carData, setCarData] = useState({
        name: "",
        make: "",
        model: "",
        color: "",
        url: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault();
          axios({
            method: "POST",
            url: "/server/cars",
            data: carData // YOU WILL FIND THIS DATA IN ***req.body*** OF THE ROUTE
        }).then((res)=>{
            console.log(res.data);
            setCarData({
                name: "",
                make: "",
                model: "",
                color: "",
                url: "",
            })
           
        })
    }

    const handleChange = (e) => {


    }

    return (
        <div>
            <h1>New Cars page</h1>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" name="name" value={carData.name} onChange={(e) => setCarData({...carData, name: e.target.value})} /><br/>
                Make: <input type="text" name="make" value={carData.make} onChange={(e) => setCarData({...carData, make: e.target.value})} /><br/>
                Model: <input type="text" name="model" value={carData.model} onChange={(e) => setCarData({...carData, model: e.target.value})} /><br/>
                Color: <input type="text" name="color" value={carData.color} onChange={(e) => setCarData({...carData, color: e.target.value})} /><br/>
                Pic Link: <input type="text" name="link" value={carData.url} onChange={(e) => setCarData({...carData, url: e.target.value})} /><br/>
                <button>Create Fruit</button>
             </form>
        </div>
    )
}

export default CreateCar;
