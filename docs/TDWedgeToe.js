import Toe from './Toe.js';
export default class TDWedgeToe extends Toe{

    constructor(numSts){
        super(numSts);
		this.CIRCUM_TO_END_TOE_RATIO = 0.3865592904;
		this.endToeSts = Math.floor(this.numSts * this.CIRCUM_TO_END_TOE_RATIO);
		this.endToeSts = Math.round(this.endToeSts/4)*4;
	}

    getToePattern(){
		return `
Place a marker after ${this.numSts/2}sts.
Round 1: *k1, ssk, knit to 3sts before next marker, k2tog, k1; repeat from * once more (4sts decreased).
Round 2: knit all sts.
Repeat the last 2 rounds until ${this.endToeSts}sts remain.
Join together the toe stitches using a Kitchener stitch.
`;
	}

    getNumRows(){
		return (this.numSts-this.endToeSts)/2;
	}
}