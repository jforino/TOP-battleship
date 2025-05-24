class Ship {

    constructor(length, name, numberOfTimesHit=0, isSunkBoolean=false){
        this.length = length; 
        this.numberOfTimesHit = numberOfTimesHit; 
        this.isSunkBoolean = isSunkBoolean; 
        this.name = name; 
    }

    hit(number){
        this.numberOfTimesHit += number; 
        this.isSunk(); 
    }

    isSunk(){
        if(this.numberOfTimesHit >= this.length){
            this.isSunkBoolean = true; 
        }

        return this.isSunkBoolean;
    }

};


module.exports = Ship