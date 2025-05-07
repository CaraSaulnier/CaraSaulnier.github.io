import Cuff from './Cuff.js';
export default class TwoxTwoRibCuff extends Cuff{

    constructor(rowGauge, length){
        super(rowGauge, length);
    }

    getCuffPattern(){
        return `
Rib round: (K2, p2) to end of round.
Repeat this round ${this.numRows - 1} times more.
`;
    }

    getNumRows(){
        return this.numRows;
    }
}