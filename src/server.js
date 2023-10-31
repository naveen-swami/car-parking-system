// import { Express as app } from "express";
const express = require('express');
const { bookslot, payment, allCars, carCount } = require('./controller/CarParking');

const app = express();

app.use(express.json());
 
app.use(express.urlencoded({ extended: true }));


app.post('/api/v1/parking/cars/bookslot', bookslot);
app.post('/api/v1/parking/cars/payment', payment);
app.post('/api/v1/parking/cars/all', allCars);
app.post('/api/v1/parking/cars/count', carCount);

app.listen(3000, () => {
    "app is running on 300 port"
})
