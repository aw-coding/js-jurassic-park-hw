const Park = function (name, ticketPrice, collection){
    this.name = name
    this.ticketPrice = ticketPrice
    this.collection = collection

}

Park.prototype.addDinosaur = function (dinosaur) {
    this.collection.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
    this.collection.pop(dinosaur);

}

module.exports = Park;