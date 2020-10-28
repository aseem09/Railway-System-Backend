const ticketService = require("../services/ticket_service.js");

class TicketController {

    getTickets = (req, res) => {
        console.log("TicketService.getAll() called");
        ticketService.getAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the User"
                });
            else res.send(data);
        })
    }

}

module.exports = new TicketController();