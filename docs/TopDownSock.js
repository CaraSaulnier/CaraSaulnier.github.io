import Heel from './Heel.js';
import BoomerangHeel from './BoomerangHeel.js';
import TDCommonHeel from './TDCommonHeel.js';
import TDGarterStitchHeel from './TDGarterStitchHeel.js';
import SimpleShapedHeel from './SimpleShapedHeel.js';
import TDSlipStitchHeel from './TDSlipStitchHeel.js';
import TDStripedHeel from './TDStripedHeel.js';
import WrapAndTurnHeel from './WrapAndTurnHeel.js';
import Toe from './Toe.js';
import TDBandedToe from './TDBandedToe.js';
import TDFourPointToe from './TDFourPointToe.js';
import TDRoundedToe from './TDRoundedToe.js';
import TDWedgeToe from './TDWedgeToe.js';

import Sock from './Sock.js';
export default class TopDownSock extends Sock{

    constructor(circumference, soleLength, legLength, cuffLength, stsPerGauge, rowsPerGauge, 
		lengthStsGauge, lengthRowsGauge, ease, cuffSelection, heelSelection, toeSelection) 
	{
		super(circumference, soleLength, legLength, cuffLength, stsPerGauge, rowsPerGauge, 
            lengthStsGauge, lengthRowsGauge, ease, cuffSelection);

		switch(heelSelection)
		{
			case 1:
				this.heel = new BoomerangHeel(this.numSts);
				break;
			case 2:
				this.heel = new TDCommonHeel(this.numSts);
				break;
			case 3:
				this.heel = new TDGarterStitchHeel(this.numSts);
				break;
			case 4:
				this.heel = new SimpleShapedHeel(this.numSts);
				break;
			case 5:
				this.heel = new TDSlipStitchHeel(this.numSts);
				break;
			case 6:
				this.heel = new TDStripedHeel(this.numSts);
				break;
			case 7:
				this.heel = new WrapAndTurnHeel(this.numSts);
				break;
			default:
				this.heel = new Heel(this.numSts);
				break;
		}

		switch(toeSelection)
		{
			case 1:
				this.toe = new TDBandedToe(this.numSts);
				break;
			case 2:
				this.toe = new TDFourPointToe(this.numSts);
				break;
			case 3:
				this.toe = new TDRoundedToe(this.numSts);
				break;
			case 4:
				this.toe = new TDWedgeToe(this.numSts);
				break;
			default:
				this.toe = new Toe(this.numSts);
				break;
		}
	}

    getSockPattern()
	{
		if((this.numRowsLeg - this.cuff.getNumRows() - this.heel.getNumRowsLeg() < 0) && (this.numRowsSole - this.heel.getNumRowsSole() - this.toe.getNumRows() < 0))
		{
			return `error, your inputs cannot create a valid sock, as the leg and the sole are too short.`;
		}
		else if(this.numRowsLeg - this.cuff.getNumRows() - this.heel.getNumRowsLeg() < 0)
		{
			return `error, your inputs cannot create a valid sock as the leg is too short.`;
		}
		else if(this.numRowsSole - this.heel.getNumRowsSole() - this.toe.getNumRows() < 0)
		{
			return `error, your inputs cannot create a valid sock as the sole is too short.`;
		}
		if(this.toe.endToeSts <=0)
		{
			return `error, either the circumference or length of your foot is too small for your gauge`;
		}
		return `
${this.stsPerGauge} sts per ${this.lengthStsGauge}cm, ${this.rowsPerGauge} rows per ${this.lengthRowsGauge}cm.
Foot circumference: ${this.footCircum}cm, foot length: ${this.soleLength}cm, sock length: ${this.legLength}cm, cuff length: ${this.cuffLength}cm.
Cast on ${this.numSts} sts. You will now work the cuff.

${this.cuff.getCuffPattern()}
Work ${this.numRowsLeg - this.cuff.getNumRows() - this.heel.getNumRowsLeg()} rows. You will now work the heel.

${this.heel.getHeelPattern()}
${this.heel.constructor.name.substring(0,2) === "TD"? 
`Work ${this.numRowsSole - this.heel.getNumRowsSole() - this.toe.getNumRows() - 1} rows.
On next row, remove start of round marker. Work until stitch marker 2. This is now going to be your start of round marker.`: 
`Work ${this.numRowsSole - this.heel.getNumRowsSole() - this.toe.getNumRows()} rows. You will now work the toe.`}
${this.toe.getToePattern()}
${this.cuff.constructor.name ==="PicotEdgeCuff"?`Fold cuff down ${this.cuff.getNumRows()} rows, and then sew down.`:``}
You now have a complete sock!`;
	}
}