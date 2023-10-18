const Car = require('./models/Car.cjs');

const express = require('express')
const app = express();
const PORT = 3001;  
const cors = require('cors')

require('dotenv').config();

require('./config/db.cjs')
app.use(cors({
    origin: "*"
}))

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/cars', async (req,res)=>{
    let carDataFromDB = await Car.find();
    res.send(carDataFromDB)
})
app.post('/cars', async (req,res)=>{
    let dbResponse = await Car.create(req.body);
    res.send(dbResponse)
})

app.listen(PORT, ()=>{
    console.log("the server is running at port ", PORT)
})