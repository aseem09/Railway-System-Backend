const Ticket = function (ticket) {
    this.passenger_id = ticket.passenger_id;
    this.user_name = ticket.user_name;
    this.age = ticket.age;
    this.gender = ticket.gender;
    this.pnr_number = ticket.pnr_number;
    this.seat_number = ticket.seat_number;
    this.train_number = ticket.train_number;
    this.fare = ticket.fare;
    this.reservation_status = ticket.reservation_status;
    this.source = ticket.source;
    this.destination = ticket.destination;
};

module.exports = Ticket;