const ticketController = require("../controllers/ticket_controller.js");

module.exports = router => {

    router.get('/tickets', ticketController.getTickets);

};