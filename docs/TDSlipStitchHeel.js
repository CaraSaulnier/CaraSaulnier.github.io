import Heel from './Heel.js';
export default class TDSlipStitchHeel extends Heel{

    BIGGEST_PART_OF_HEEL;
    constructor(numSts){
        super(numSts);
        this.CIRCUM_TO_SMALLEST_PART_OF_HEEL_RATIO = 0.5755438842;
        this.numStsSmallestPartHeel = Math.floor(this.numSts * this.CIRCUM_TO_SMALLEST_PART_OF_HEEL_RATIO);
		this.numStsSmallestPartHeel = Math.round(this.numStsSmallestPartHeel/2)*2;
        this.BIGGEST_PART_OF_HEEL = this.numSts * 2 + this.numStsSmallestPartHeel;
    }

    getNumRowsSole()
	{
        let numRows = this.BIGGEST_PART_OF_HEEL - (this.numSts*2);
        numRows += (this.numSts-4)/2;
		return numRows;
	}

    getNumRowsLeg()
	{
        let numRows = this.numSts-2;
		return numRows;
	}

    getHeelPattern()
	{
        return`
Step 1: Set-up.
Slip the next ${this.numSts} sts onto 1 DPN.

Step 2: Heel flap.
Heel row 1 (RS): Slip the first st knitwise, k1, * slip the next st purlwise (keeping yarn at back), k1; repeat from * to end of heel sts, turn.
Heel row 2: Slip the first st purlwise (with yarn at front), then purl every st to end of heel sts, turn.
Repeat rows 1-2 a further ${(this.numSts/2)-2} times.
You will now have a rectangle with ${(this.numSts/2)-1} slipped sts along each side edge.

Step 3: Turning the heel.
Row 1 (RS): Slip 1 st knitwise, k${(this.numSts/2)+1}, ssk, k1, turn.
Row 2: Slip 1 st purlwise, p5, p2tog, p1, turn.
Row 3: Slip 1 st knitwise, knit to 1 st before the gap, ssk, k1, turn.
Row 4: Slip 1 st purlwise, purl to 1 st before the gap, p2tog, p1, turn.

${(this.numSts%4===0)? 
`Repeat rows 3-4 until ${this.numStsSmallestPartHeel+2} sts remain.
Next row: Slip 1 st knitwise, knit 1 st before the gap, ssk, turn.
Next row: Slip 1 st purlwise, purl to 1 st before the gap, p2tog, turn.` :
`Repeat rows 3-4 until ${this.numStsSmallestPartHeel} sts remain.`}

Step 4: Picking up gusset sts.
With RS facing, knit across remaining ${this.numStsSmallestPartHeel} sts.
With next DPN, pick up and knit ${(this.numSts/2)-1} sts along the first edge of the heel flap.
Pick up an extra before the instep sts by working M1R.
Place stitch marker 1, knit next ${this.numSts} instep sts. Place stitch marker 2.
Pick up and knit1 st from gap before heel flap by working M1L.
With next DPN, pick up and knit ${(this.numSts/2)-1} sts along the next edge of heel flap.
You now have ${this.BIGGEST_PART_OF_HEEL} sts. Place marker to mark the start of round.

Step 5: Shaping the gusset.
Round 1: Knit to 3 sts before stitch marker 1, k2tog, k1, slip marker, k${this.numSts} sts across to stitch marker 2, slip marker, k1, ssk, knit to end of round.
Round 2: Knit all stitches and slip all markers.
Repeat rounds 1-2 until ${this.numSts*2}sts remain, ending after round 1.
`;
	}
}