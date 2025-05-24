class Gameboard {

    constructor(){
        this.height = 10; 
        this.width = 10;         
        this.board = Array.from({ length: this.height }, () => {
            return Array.from({ length: this.width }, () => ' ')
        })
        this.currentShipsPlaced = 0;
    };

    printBoard(){
        return console.table(this.board);  
    }

    placeShip(shipName, x, y, orientation){
        if(shipName.isSunken()){
            throw new Error('Ship is sunken already')
        }

        for(let i = 0; i < shipName.length; i++){
            if(orientation = 'horizontal'){
                this.board[x][y+i] = 'S'
            }
        }
    }


}

module.exports = Gameboard;


let testGameboard = new Gameboard; 

console.log(testGameboard.printBoard())