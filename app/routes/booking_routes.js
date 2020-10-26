const bookingController = require("../controllers/booking_controller.js");

module.exports = router => {

    router.get('/bookings', bookingController.getBookings);

};