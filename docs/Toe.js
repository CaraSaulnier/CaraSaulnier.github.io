export default class Toe {

    numSts;
    startToeSts;
    endToeSts;
    constructor(numSts) {
        this.numSts = numSts;
    }

    getToePattern(){
        return `
error, no toe has been selected
`;
    }

    getNumSts(){
        return this.numSts;
    }

    getNumRows(){
        return -1;
    }
}