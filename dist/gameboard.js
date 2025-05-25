class Gameboard {

    constructor(){
        this.height = 10; 
        this.width = 10;         
        this.board = Array.from({ length: this.height }, () => {
            return Array.from({ length: this.width }, () => ' ')
        })
        this.missedShotArray = [];
    };

    printBoard(){
        return console.table(this.board);  
    }
    
    clearBoard(){
        this.board = Array.from({ length: this.height }, () => {
            return Array.from({ length: this.width }, () => ' ')
        })
    }

    placeShip(shipName, x, y, orientation){
        if(shipName.isSunk()){
            throw new Error('Ship is sunken already')
        }

        if(shipName.length - x < 0  || shipName.length - y < 0){
            throw new Error('Ship cannot be placed there - Out of Map'); 
        }

        for(let i = 0; i < shipName.length; i++){
            if(orientation === 'horizontal'){
                this.board[y][x+i] = {ship : shipName}
            }

            if (orientation === 'vertical'){
                this.board[y+i][x] = {ship: shipName}; 
            }
        }
    }

    receiveAttack(x, y){
        const cell = this.board[y][x]; 
        if(typeof cell === 'object' && 'ship' in cell){
            console.log(cell.ship.hit(1)); 
            this.board[y][x] = 'X'; 
        }
        else {
            this.missedShotArray.push([x,y]); 
            this.board[x][y] = 'M'; 
        }
    }

    checkIfAllShipsSunk(){
        for (let row of this.board){
            for (let cell of row){
                if (typeof cell === 'object' && 'ship' in cell){
                    return false;
                }

                
            }
        }

        return true; 
    }


}

module.exports = Gameboard;