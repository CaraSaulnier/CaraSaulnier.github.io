import Heel from './Heel.js';
export default class BUGussetHeel extends Heel{

    constructor(numSts){
        super(numSts);
    }

    getNumRowsSole(){
		return this.numSts + 9;
	}

    getNumRowsLeg(){
		return this.numSts + 9;
	}

    getHeelPattern()
	{
        return `
Step 1: Shaping the gusset.
Round 1: Knit to first marker, slip marker, k1, M1R, knit to last stitch of round, M1L, k1.
Round 2: Knit to end of round.
Repeat rounds 1-2 until you have ${this.numSts*1.5}sts in total.

Step 2: Turning the heel.
Row 1 (WS): P${(this.numSts*3)/4}, turn, leaving ${this.numSts/4} gusset sts unworked.
Row 2: MDS (make double stitch) as follows: Slip 1 stitch knitwise with yarn in front.
K${this.numSts-1}, turn, leaving ${this.numSts/4} gusset sts unworked.
Row 3: MDS, purl to previous DS, turn.
Row 4: MDS, knit ot previous DS, turn.
Rows 5-16: Repeat rows 3-4 six more times.
Row 17: MDS, purl to first DS, purl next 6 DS (purl both legs as if p2tog), p2tog (next DS and next plain stitch), turn, leaving ${(this.numSts/4)-1} gusset sts unworked.
Row 18: Sl1 wyib, knit to first DS, knit next 6 DS (knit both lefs as if k2tog), k2tog(next DS and next plain stitch), turn, leaving {(this.numSts/4)-1} gusset sts unworked.

Step 4: Heel flap.
Row 1 (WS): Sl1 wyif, p${this.numSts-2}, p2tog, turn.
Row 2: Sl1 wyib, (k1, sl1 wyib) ${(this.numSts-2)/2} times, ssk, turn.
Repeat rows 1-2 until you have ${this.numSts*2}sts.
`;
	}
}