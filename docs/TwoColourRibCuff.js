import Cuff from './Cuff.js';
export default class TwoColourRibCuff extends Cuff{
    
    constructor(rowGauge, length){
        super(rowGauge, length);
    }

    getCuffPattern(){
        return `
Yarn A will be the main yarn colour, yarn B will be the secondary yarn colour.
Rib round: (With yarns at the back, k2 with yarn A, bring yarn B to front, p2 in yarn B, take yarn B to back) to end.
Repeat this round ${this.numRows - 1} times more.
`;
    }

    getNumRows(){
        return this.numRows;
    }
}