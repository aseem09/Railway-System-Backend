const Passenger = require("../models/passenger_model.js");
const Booking = require("../models/bookings_model.js");
const passengerService = require("../services/passenger_service.js");
const bookingService = require("../services/booking_service.js");

class PassengerController {

    create = (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty"
            });
        }

        const passenger = new Passenger({
            user_name: req.body.user_name,
            age: req.body.age,
            gender: req.body.gender,
        });

        console.log("PassengerService.create() called");
        passengerService.create(passenger, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Passenger"
                });
            else {
                const booking = new Booking({
                    user_id: 1,
                    passenger_id: data.id,
                });
                bookingService.updateBooking(booking, (err, data) => {
                    if (err)
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while creating the Booking"
                        });
                    else res.send(data);
                });
            }
        });
    }
    getPassengers = (req, res) => {
        console.log("PassengerService.getAll() called");
        passengerService.getAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the User"
                });
            else res.send(data);
        })
    }

}

module.exports = new PassengerController();