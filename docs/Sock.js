import Cuff from './Cuff.js';
import OnexOneRibCuff from './OnexOneRibCuff.js';
import TwoxTwoRibCuff from './TwoxTwoRibCuff.js';
import ThreexOneRibCuff from './ThreexOneRibCuff.js';
import HalfTwistedRibCuff from './HalfTwistedRibCuff.js';
import PicotEdgeCuff from './PicotEdgeCuff.js';
import TwoColourRibCuff from './TwoColourRibCuff.js';

export default class Sock{

    stsGauge;
	rowGauge;
	numRowsSole;
	numRowsLeg;
	stsPerGauge;
	rowsPerGauge;
	lengthStsGauge;
	lengthRowsGauge;
	numSts;
	heel;
	toe;
	cuff;
	soleLength;
	legLength;
	cuffLength;
	footCircum;

	constructor(circumference, soleLength, legLength, cuffLength, stsPerGauge, 
		rowsPerGauge, lengthStsGauge, lengthRowsGauge, ease, cuffSelection)
	{
		this.stsGauge = stsPerGauge/lengthStsGauge;
		this.rowGauge = rowsPerGauge/lengthRowsGauge;
		this.numSts = Math.round((this.stsGauge * circumference)/4)*4;
		this.numRowsSole = Math.round(soleLength * this.rowGauge);
		this.numRowsLeg = Math.round(legLength*this.rowGauge);

		this.stsPerGauge = Math.floor(stsPerGauge);
		this.rowsPerGauge = Math.floor(rowsPerGauge);
		this.soleLength = soleLength;
		this.legLength = legLength;
		this.cuffLength = cuffLength;
		this.circumference = circumference*ease;
		this.lengthStsGauge = lengthStsGauge;
		this.lengthRowsGauge = lengthRowsGauge;
		this.footCircum = circumference;

		switch(cuffSelection)
		{
			case 1:
				this.cuff = new OnexOneRibCuff(this.rowGauge, cuffLength);
				break;
			case 2:
				this.cuff = new TwoxTwoRibCuff(this.rowGauge, cuffLength);
				break;
			case 3:
				this.cuff = new ThreexOneRibCuff(this.rowGauge, cuffLength);
				break;
			case 4:
				this.cuff = new HalfTwistedRibCuff(this.rowGauge, cuffLength);
				break;
			case 5:
				this.cuff = new PicotEdgeCuff(this.rowGauge, cuffLength);
				break;
			case 6:
				this.cuff = new TwoColourRibCuff(this.rowGauge, cuffLength);
				break;
			default:
				this.cuff = new Cuff(this.rowGauge, cuffLength);
				break;
		}
	}

	getSockPattern()
	{
		return `
error, a sock has not been selected
`;
	}
}