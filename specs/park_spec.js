const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    tRex = new Dinosaur('t-rex', 'carnivore', 50);
    raptor = new Dinosaur('Raptor', 'carnivore', 20)
    compy = new Dinosaur ('Compy', 'omnivore', 5)
    park = new Park('Jurassic Park', 12.5, [compy, raptor])


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
    assert.deepEqual(actual, [compy, raptor])    //is this correct?
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(tRex);
    const actual = park.collection;
    assert.deepStrictEqual(actual, [compy,raptor, tRex])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(raptor);
    const actual = park.collection;
    assert.deepStrictEqual(actual, [compy])
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
