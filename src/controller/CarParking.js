// import { bookslotService } from "../services/CarParking";

const CarParkingService = require('../services/CarParking');

exports.bookslot = async (req, res) => {

    const { carNumber, userId, carCategory } = req.body;
    console.log(carNumber, userId, carCategory);
    const bookingId = await CarParkingService.bookslotService(carNumber, userId, carCategory);

    console.log(bookingId);
    
    res.send("Your car is parked")
}

exports.payment = async (req, res) => {

    const { carNumber, userId, carCategory } = req.body;
    console.log(carNumber, userId, carCategory);
    const bookingId = await CarParkingService.bookslotService(carNumber, userId, carCategory);

    console.log(bookingId);

    res.send("Your car is parked")
}

exports.allCars = async (req, res) => {

    const { carNumber, userId, carCategory } = req.body;
    console.log(carNumber, userId, carCategory);
    const bookingId = await CarParkingService.bookslotService(carNumber, userId, carCategory);

    console.log(bookingId);

    res.send("Your car is parked")
}

exports.carCount = async (req, res) => {

    const { carNumber, userId, carCategory } = req.body;
    console.log(carNumber, userId, carCategory);
    const bookingId = await CarParkingService.bookslotService(carNumber, userId, carCategory);

    console.log(bookingId);

    res.send("Your car is parked")
}