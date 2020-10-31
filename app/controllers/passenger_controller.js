const Passenger = require("../models/passenger_model.js");
const Booking = require("../models/bookings_model.js");
const Ticket = require("../models/ticket_model.js");
const passengerService = require("../services/passenger_service.js");
const bookingService = require("../services/booking_service.js");
const ticketService = require("../services/ticket_service.js");

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
            cost: req.body.cost,
        });

        console.log("PassengerService.create() called");
        passengerService.create(passenger, (err, passenger_data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Passenger"
                });
            else {
                const booking = new Booking({
                    user_id: 1,
                    passenger_id: passenger_data.id,
                });

                console.log("BookingService.create() called");
                bookingService.create(booking, (err, data) => {
                    if (err)
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while creating the Booking"
                        });
                    else {
                        const ticket = new Ticket({
                            passenger_id :  passenger_data.id,
                            user_name :  req.body.user_name,
                            age :  req.body.age,
                            gender :  req.body.gender,
                            pnr_number :  1000000 + Math.floor(Math.random() * (10000000 - 1000000 + 1)),
                            seat_number :  10 + Math.floor(Math.random() * (100 - 10 + 1)),
                            train_number :  req.body.train_number,
                            fare :  req.body.cost,
                            reservation_status :  "CONFIRMED",
                            source :  req.body.source,
                            destination :  req.body.destination,
                        });

                        console.log("TicketService.create() called");
                        ticketService.create(ticket, (err, data) => {
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