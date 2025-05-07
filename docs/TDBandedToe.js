import Toe from './Toe.js';
export default class TDBandedToe extends Toe{

    constructor(numSts){
        super(numSts);
		this.CIRCUM_TO_END_TOE_RATIO = 0.3865592904;
		this.endToeSts = (this.numSts * this.CIRCUM_TO_END_TOE_RATIO);
		this.endToeSts = Math.round(this.endToeSts/4)*4;
    }

    getToePattern(){
		return `
Place a marker after ${this.numSts/2}sts.
Round 1: *ssk, knit to 2sts before next marker, k2tog; repeat from * once more (4sts decreased).
Round 2: knit all sts.
Repeat the last 2 rounds until ${this.endToeSts} remain.
Join together the toe stitches using a Kitchener stitch.
`;
	}

    getNumRows(){
		return (this.numSts-this.endToeSts)/2;
	}
}