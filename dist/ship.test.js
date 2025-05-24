const Ship = require('./ship'); 

let myTestJestShip = new Ship(5, 5, true); 
let ship;

describe('Ship Class', () => {

    beforeEach(() => {
        ship = new Ship(3); 
    });
    
    test('initial state is correct', () => {
        expect(ship.length).toBe(3); 
        expect(ship.numberOfTimesHit).toBe(0); 
        expect(ship.isSunk()).toBe(false); 
    })

    test(`hit() function to increase number of times hit`, () => {
        ship.hit(2); 
        expect(ship.numberOfTimesHit).toBe(2); 
        expect(ship.isSunk()).toBe(false); 
    })

    test(`Is sunken when number of times hit is greater than length`, () => {
        ship.hit(4); 
        expect(ship.numberOfTimesHit).toBe(4); 
        expect(ship.isSunk()).toBe(true); 
    } )
})

