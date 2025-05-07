import Heel from './Heel.js';
import BoomerangHeel from './BoomerangHeel.js';
import BUGussetHeel from './BUGussetHeel.js';
import SimpleShapedHeel from './SimpleShapedHeel.js';
import WrapAndTurnHeel from './WrapAndTurnHeel.js';
import Toe from './Toe.js';
import BUBandedToe from './BUBandedToe.js';
import BUBasicToe from './BUBasicToe.js';
import BUWedgeToe from './BUWedgeToe.js';

import Sock from './Sock.js';
export default class BottomUpSock extends Sock{

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
				this.heel = new BUGussetHeel(this.numSts);
				break;
			case 3:
				this.heel = new SimpleShapedHeel(this.numSts);
				break;
			case 4:
				this.heel = new WrapAndTurnHeel(this.numSts);
				break;
			default:
				this.heel = new Heel(this.numSts);
				break;
		}
		switch(toeSelection)
		{
			case 1:
				this.toe = new BUBandedToe(this.numSts);
				break;
			case 2:
				this.toe = new BUBasicToe(this.numSts);
				break;
			case 3:
				this.toe = new BUWedgeToe(this.numSts);
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
		if(this.numRowsLeg - this.cuff.getNumRows() - this.heel.getNumRowsLeg() < 0)
		{
			return `error, your inputs cannot create a valid sock as the leg is too short.`;
		}
		if(this.numRowsSole - this.heel.getNumRowsSole() - this.toe.getNumRows() < 0)
		{
			return `error, your inputs cannot create a valid sock as the sole is too short.`;
		}
		if(this.toe.startToeSts <=0)
		{
			return `error, either the circumference or length of your foot is too small for your gauge`;
		}
		return `
${this.stsPerGauge} sts per ${this.lengthStsGauge}cm, ${this.rowsPerGauge} rows per ${this.lengthRowsGauge} cm.
Foot circumference: ${this.footCircum}cm, foot length: ${this.soleLength}cm, sock length: ${this.legLength}cm, cuff length: ${this.cuffLength}cm.
${this.toe.getToePattern()}
Work ${this.numRowsSole - this.heel.getNumRowsSole() - this.toe.getNumRows()} rows. You will now work the heel.

${this.heel.getHeelPattern()}
Work ${this.numRowsLeg - this.cuff.getNumRows() - this.heel.getNumRowsLeg()} rows. You will now work the cuff.

${this.cuff.getCuffPattern()}
Cast off all stitches.

${this.cuff.constructor.name ==="PicotEdgeCuff"?`Fold cuff down ` + this.cuff.getNumRows() + ` rows, and then sew down.`:``}
You now have a complete sock!`;
	}
}