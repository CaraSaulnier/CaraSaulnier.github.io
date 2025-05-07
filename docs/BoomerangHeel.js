import Heel from './Heel.js';
export default class BoomerangHeel extends Heel{

    constructor(numSts){
        super(numSts);
        this.CIRCUM_TO_SMALLEST_PART_OF_HEEL_RATIO = 0.3235644258;
        this.numStsSmallestPartHeel = Math.floor(this.numSts * this.CIRCUM_TO_SMALLEST_PART_OF_HEEL_RATIO);
		this.numStsSmallestPartHeel = Math.round(this.numStsSmallestPartHeel/4)*4;
    }

    getNumRowsSole(){
        // there are two additional rows created in the boomerang, they are split between the sole and the leg
		return this.numSts - this.numStsSmallestPartHeel + 1;
	}

    getNumRowsLeg(){
        // there are two additional rows created in the boomerang, they are split between the sole and the leg
		return this.numSts - this.numStsSmallestPartHeel + 1;
	}

    // I don't know how string concatenation works in javascript
    getHeelPattern()
    {
        return `
Step 1: First part of heel.

Row 1 (RS): K${this.numSts}sts, turn and continue on these sts only
Row 2: MDS (make double stitch) as follows: Slip 1 stitch purlwise with yarn in front.
Pull yarn upwards, over the needle and to the back to pull on the slipped stitch until is shows 2 legs of the stitch.
Then bring the yarn to the front between the two needles, and purl to end, turn.
Row 3: MDS, knit to DS, turn.
Row 4: MDS, bring to front between needles, and purl to DS, turn.
Repeat rows 3 and 4 until ${this.numStsSmallestPartHeel}sts remain unworked in the middle between the DS sts, with ${(this.numSts - this.numStsSmallestPartHeel)/2}DS sts on each side of the heel.

Step 2: Boomerang.
Place a marker, then work across the unworked sts, knitting the DS sts as you would for a k2tog.
Knit all sts in the round until you reach the marker, knit the DS sts the same as previously.
Next round: Knit all sts in the round, stop at the marker and remove the marker.

Step 3: Second part of heel.
Set up row (RS): K${this.numStsSmallestPartHeel+1}, turn.
Row 1: MDS, p${this.numStsSmallestPartHeel+1}, turn.
Row 2: MDS, knit to DS, knit the DS and knit the next st after, turn.
Row 3: MDS, purl to DS, purl the DS, and purl the next st after it, turn.

Repeat rows 2-3 until all the DS sts have been worked, you will end after a row 2.

The heel is now finished. There will be one final DS to knit at the start of the heel. Knit this DS as before when you reach it.
`;
    }
}