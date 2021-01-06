const Park = function (name, ticketPrice, collection){
    this.name = name
    this.ticketPrice = ticketPrice
    this.colletion = collection

}

Park.prototype.addDinosaur = function (dinosaur) {
    this.collection.push(dinosaur);
}

module.exports = Park;