import Toe from './Toe.js';
export default class BUBasicToe extends Toe{

    constructor(numSts){
        super(numSts);
        this.CIRCUM_TO_START_TOE_RATIO = 0.3865592904;
        this.startToeSts = Math.floor(this.numSts * this.CIRCUM_TO_START_TOE_RATIO);
		this.startToeSts = Math.round(this.startToeSts/4)*4;
    }

    getToePattern()
    {
        return `
Cast on ${this.startToeSts} sts using Judy's magic cast on.
Place a marker at the start of the round and the halfway point of the round.

Round 1: Knit all sts, and slip all markers.
Round 2: Kfb, knit to first stitch marker, kfb, slip marker, kfb, knit to last stitch, kfb.
Round 3: Knit all sts and slip all markers.
Repeat rounds 2 and 3 until you have ${this.numSts} sts in total.
`;
    }

    getNumRows()
    {
        return (this.numSts-this.startToeSts)/2+1;
    }
}