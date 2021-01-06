const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 12.5, [])
    tRex = new Dinosaur('t-rex', 'carnivore', 50);
    compy = new Dinosaur ('Compy', 'omnivore', 5)


  });

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 12.5)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collection;
    assert.strictEqual(actual, undefined)    //is this correct?
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(tRex);
    const actual = park.collection;
    assert.deepEqual(actual, [tRex])
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
