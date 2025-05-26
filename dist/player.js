class Player {

    constructor(name, playerType, gameboard){
        if (playerType !== 'computer' || playerType !== 'player'){
            throw new Error('Player must be either "player" or "computer"')
        }

        this.name = name; 
        this.playerType = playerType
        this.gameboard = gameboard
        this.shipCount = 0; 
    }

}

module.exports = Player; 