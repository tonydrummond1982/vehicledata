const express = require("express");
const app = express();

const vehicles = [
    {
        vehicle: "Car",
        ownerName: "Bruno Antunes",
        details: "Some detail about Bruno's car",
    },
    {
        vehicle: "Bike",
        ownerName: "Bruno Antunes",
        details: "Some detail about Bruno's bike",
    },
    {
        vehicle: "Bike",
        ownerName: "John Doe",
        details: "Some detail about John's bike",
    },
    {
        vehicle: "Airplane",
        ownerName: "Bill Gates",
        details: "Some detail Bill Gates",
    },
    {
        vehicle: "SpaceX",
        ownerName: "Elon Musk",
        details: "Some detail about Elon's ship",
    },
];

app.get("/vehicles", (req, res) => {
    res.send(JSON.stringify(vehicles));
});

app.listen(4001, () => {
    console.log("Listening on port 4001");
});
