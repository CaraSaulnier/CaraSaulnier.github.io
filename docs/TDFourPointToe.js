import Toe from './Toe.js';
export default class TDFourPointToe extends Toe{

    constructor(numSts){
        super(numSts);
        this.endToeSts = 8;
    }

    getNumRows()
    {
        let numRows = this.numSts - this.endToeSts;
        numRows = numRows /2 + 1;
        return numRows;
    }

    getToePattern() 
    {
        return `
Set-up round: *K${this.numSts/4}, place marker; repeat from * 3 more times.

Round 1: *K to last 2 sts before stitch marker, k2tog, slip marker; repeat from * 3 more times.
Round 2: K all sts and slip all markers.

Repeat the last 2 rows until 8 sts remain.

Cut yarn, pull yarn through sts, pull tightly, sew a few stitches in the same place to close the hole left behind.
`;
    }
}