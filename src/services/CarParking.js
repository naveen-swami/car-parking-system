const Constant = require("../constant")

const fs = require("fs").promises
const path = require("path")

exports.bookslotService = async (carNumber, userId, carCategory) => {

    console.log(carNumber, userId, carCategory);

    // Need to update data into car parking for particular car

    const path = "/Users/naveen/naveen/old laptop backup/Projects/best-projects/MERN projects/car-parking-system/src/db/data/Parking.json";
    // let parkingData;

    await fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(data)
        const parkingData = JSON.parse(data);
        
        parkingData['carCategory']['currentParking'].push({
            carNumber,
            userId
        })

        fs.writeFile(path, JSON.stringify(parkingData, null, 2), (err) => {
            if (err) {
                console.log("Failed to write updated data to file");
                return;
            }
            console.log("Updated file successfully");
        });

    });


    const parkingId = "1234"
    return parkingId;
}


exports.payment = async (carNumber, userId, carCategory) => {

    console.log(carNumber, userId, carCategory);

    // Need to update data into car parking for particular car

    const parkingId = "1234"
    return parkingId;
}


exports.allCars = async (carNumber, userId, carCategory) => {

    console.log(carNumber, userId, carCategory);

    // Need to update data into car parking for particular car

    const parkingId = "1234"
    return parkingId;
}

exports.carCount = async (carNumber, userId, carCategory) => {

    console.log(carNumber, userId, carCategory);

    // Need to update data into car parking for particular car

    const parkingId = "1234"
    return parkingId;
}