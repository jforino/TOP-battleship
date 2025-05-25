const Gameboard = require('./gameboard'); 
const Ship = require('./ship'); 

let currentGameboard;

describe('Gameboard class tests', () => {

    beforeEach(() => {
        currentGameboard = new Gameboard; 
    })

    afterEach(() => {
        currentGameboard.clearBoard();
    })

    test(`place ship at x, y coordinates, horizontally`, () => {
        let myShip = new Ship(3, 'ship1'); 
        expect(currentGameboard.placeShip(myShip, 0, 0, 'horizontal'));
        console.log(currentGameboard.printBoard()); 
    })

    test(`place ship at x, y coordinates, vertically`, () => {
        let myShip = new Ship(3, 'ship1'); 
        expect(currentGameboard.placeShip(myShip, 0, 0, 'vertical'));
        console.log(currentGameboard.printBoard());
    })

    test(`place ship at out of bounds, horizontally`, () => {
        let myShip = new Ship(3, 'ship1'); 
        expect(() => currentGameboard.placeShip(myShip, 9, 0, 'horizontal')).toThrow('Ship cannot be placed there - Out of Map');
        console.log(currentGameboard.printBoard()); 
    })

    test(`place ship at out of bounds, vertically`, () => {
        let myShip = new Ship(3, 'ship1'); 
        expect(() => currentGameboard.placeShip(myShip, 0, 9, 'vertical')).toThrow('Ship cannot be placed there - Out of Map');
        console.log(currentGameboard.printBoard()); 
    })

    test(`test receiveAttack() with a ship at passed coords`, () => {
        let myShip = new Ship(3, 'ship1'); 
        currentGameboard.placeShip(myShip, 2, 2, 'vertical'); 
        expect(currentGameboard.receiveAttack(2,2))
        console.log(currentGameboard.printBoard()); 
        console.log(`logging number of times hit --> ${myShip.numberOfTimesHit}`); 
    })

    test(`test receiveAttack() if no ship is at passed coords`, () => {
        let myShip = new Ship(3, 'ship1'); 
        currentGameboard.placeShip(myShip, 2, 2, 'vertical'); 
        expect(currentGameboard.receiveAttack(0,0))
        console.log(currentGameboard.printBoard());
        console.log(currentGameboard.missedShotArray); 
    })

    test(`testing checkIfAllShipsSunk() --> expecting false`, () => {
        let myShip = new Ship(3, 'ship1'); 
        currentGameboard.placeShip(myShip, 2, 2, 'vertical'); 
        console.log(currentGameboard.printBoard()); 
        expect(currentGameboard.checkIfAllShipsSunk()).toBe(false); 
    })

    test(`testing checkIfAllShipsSunk() --> expecting true`, () => {
        let myShip = new Ship(2, 'ship1'); 
        currentGameboard.placeShip(myShip, 2, 2, 'vertical'); 
        currentGameboard.receiveAttack(2, 2);
        currentGameboard.receiveAttack(2, 3);
        console.log(currentGameboard.printBoard()); 
        expect(currentGameboard.checkIfAllShipsSunk()).toBe(true); 
    })
    
})