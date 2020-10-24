const bookingService = require("../services/booking_service.js");

class BookingController {

    getBookings = (req, res) => {
        console.log("BookingService.getAll() called");
        bookingService.getAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the User"
                });
            else res.send(data);
        })
    }

}

module.exports = new BookingController();