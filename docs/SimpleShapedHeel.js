import Heel from './Heel.js';
export default class SimpleShapedHeel extends Heel{

    constructor(numSts){
        super(numSts);
		this.CIRCUM_TO_SMALLEST_PART_OF_HEEL_RATIO = 0.3235644258;
		this.numStsSmallestPartHeel = Math.floor(this.numSts * this.CIRCUM_TO_SMALLEST_PART_OF_HEEL_RATIO);
		this.numStsSmallestPartHeel =Math.round(this.numStsSmallestPartHeel/4)*4;
	}

    getNumRowsSole(){
		return this.numSts - this.numStsSmallestPartHeel;
	}

    getNumRowsLeg()
	{
		return this.numSts - this.numStsSmallestPartHeel;
	}

    getHeelPattern()
	{
		return `
Step 1: Set-up.
Slip the next ${this.numSts}sts onto 1 DPN, leaving the other stitches on their original needle(s).
Work on heel stitches only.

Step 2: First half of heel.

Row 1 (RS): Slip the first stitch, then knit to the last 3 heel sts, k2tog, k1, turn.
Row 2: Slip the first stitch then purl to the last 3 sts, p2tog, p1, turn.

Repeat rows 1-2 until ${this.numStsSmallestPartHeel} sts remain.

Step 3: Second half of heel.

Row 1 (RS): Slip the first stitch then knit to the end, pick up and knit the slipped stitch from next row of first helf, turn.
Row 2: Slip the first stitch then purl to the end, pick up and purl the next slipped stitch from the first half, turn.

Repeat these 2 rows until you have ${this.numSts} sts on your needle.
Redistribute the stitches onto their original needles.
`;
	}
}