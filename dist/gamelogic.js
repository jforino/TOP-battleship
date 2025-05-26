const Gameboard = require('./gameboard');
const Player = require('./player'); 
const Ship = require('./ship');
const renderDOM = require('./renderDOM'); 

function createGameboardForPlayer(){
    return new Gameboard; 
}


function startGame(playerOne, playerTwo){

    const playerOneGameboard = createGameboardForPlayer(); 
    const playerTwoGameboard = createGameboardForPlayer(); 

}