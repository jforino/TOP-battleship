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
    })
    
})