import Cuff from './Cuff.js';
export default class OnexOneRibCuff extends Cuff{

    constructor(rowGauge, length){
        super(rowGauge, length);
    }

    getCuffPattern(){
        return `
Rib round: (K1, p1) to end of round.
Repeat this round ${this.numRows - 1} times more.
`;
    }

    getNumRows(){
        return this.numRows;
    }
}