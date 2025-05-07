export default class Heel{

    numSts;
    numStsSmallestPartHeel;
    constructor(numSts){
        this.numSts = numSts/2;
    }

    getNumSts(){
        return this.numSts;
    }

    getNumRowsLeg(){
        return -1;
    }

    getNumRowsSole(){
        return -1;
    }

    getHeelPattern(){
        return `
        error, a heel has not been selected
        `;
    }
}