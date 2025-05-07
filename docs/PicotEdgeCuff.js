import Cuff from './Cuff.js';
export default class PicotEdgeCuff extends Cuff{
    constructor(rowGauge, length){
        super(rowGauge, length);
    }

    getCuffPattern(){
        return `
Plain round: K to end of round.
Repeat this round ${this.numRows - 1} times more.
Eyelet round: (K2tog, yo) to end.
Plain round: K to end of round.
Repeat this round ${this.numRows - 1} times more.
`;
    }

    getNumRows(){
        return this.numRows;
    }
}