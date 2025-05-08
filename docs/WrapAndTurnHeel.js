import Heel from './Heel.js';
export default class WrapAndTurnHeel extends Heel{

    constructor(numSts)
    {
        super(numSts);
        this.CIRCUM_TO_SMALLEST_PART_OF_HEEL_RATIO = 0.3117997199;
        this.numStsSmallestPartHeel = Math.floor(this.numSts * this.CIRCUM_TO_SMALLEST_PART_OF_HEEL_RATIO);
		this.numStsSmallestPartHeel = (Math.round(this.numStsSmallestPartHeel/4)*4);
    }

    getNumRowsSole()
	{
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
Slip the next ${this.numSts} sts onto 1 DPN, you will now work the heel on these sts only.

Step 2: First half of heel.
Row 1 (RS): Knit to last st, *bring yarn to front between needles, slip next st purlwise to right-hand needle, take yarn back between needles, slip st back to left-hand needl (RS W&T complete), turn*.
Row 2: Purl to last st, **take yarn to back between needles, slip last stitch purlwise to right-hand needle, bring yarn to front between needles, slip stitch back to left-hand needle (WS W&T complete), turn**.
Row 3: Knit to 1 st before the last wrapped st of the heel, work as from * to * to complete a RS W&T.
Row 4: Purl ot 1 st before the last wrapped st of the heel, work as from ** to ** to complete a WS W&T.

Repeat rows 3 - 4 until ${this.numStsSmallestPartHeel} sts remain unworked in the middle of the heel, between the wrapped stitches.
There are now ${(this.numSts-this.numStsSmallestPartHeel)/2} wrapped stitches on each side of the unworked stitches.

Step 2: Second half of heel.
Row 1 (RS): Knit to the first wrapped st, pick up wrapped st and knit it together with st on needle, W&T the next st (this st now has 2 wraps).
Row 2: Purl to first wrapped st pick up wrapped st and purl it together with st on needle, W&T the next st (this st now has 2 wraps).
Row 3: Knit to st with double wrap, pick up both wraps and knit them together with st on needle, W&T the next st.
Row 4: Purl to st with double wrap. Pick up both wraps and purl them together with st on needle, W&T the next st.
Repeat rows 3-4 until there is 1 double wrap left on each side of heel.
Next row: Repeat row 3 working the W&T on the next st from the instep.
Next row: Repeat Row 4, working the last W&T on the st from the instep.
`;
	}
}