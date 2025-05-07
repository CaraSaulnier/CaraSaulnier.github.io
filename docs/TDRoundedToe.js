import Toe from './Toe.js';
export default class TDRoundedToe extends Toe{

    constructor(numSts){
        super(numSts);
        // number of end toe sts will be calculated as pattern is being written
        this.endToeSts = this.numSts;
    }

    getToePattern()
    {
        pattern = ``;
        decreaseRound = 1;
        if(this.numSts % 8 != 0)
        {
            this.endToeSts -= 4;
            // if the sock is not knitted on a multiple of 8, this row will transform it into a multiple of 8
            pattern += `Decrease round ${decreaseRound}: (K${(this.numSts/4)-2}, k2tog) 4 times. [${this.endToeSts}]
            
            `;
            decreaseRound++;
        }
        // Stitch decrease is a constant number
        stitchDecrease = (this.endToeSts/8);
        this.endToeSts -= stitchDecrease;
        pattern += `Decrease round ${decreaseRound}: (k6, k2tog) to end.[${this.endToeSts}]\n`+
        `Knit 6 rounds.\n\n`;
        decreaseRound++;
        this.endToeSts -= stitchDecrease;
        pattern += `Decrease round ${decreaseRound}: (k5, k2tog) to end.[${this.endToeSts}]\n`+
        `Knit 5 rounds.\n\n`;
        decreaseRound++;
        this.endToeSts -= stitchDecrease;
        pattern += `Decrease round ${decreaseRound}: (k4, k2tog) to end.[${this.endToeSts}]\n`+
        `Knit 4 rounds.\n\n`;
        decreaseRound++;
        this.endToeSts -= stitchDecrease;
        pattern += `Decrease round ${decreaseRound}: (k3, k2tog) to end.[${this.endToeSts}]\n`+
        `Knit 3 rounds.\n\n`;
        decreaseRound++;
        this.endToeSts -= stitchDecrease;
        pattern += `Decrease round ${decreaseRound}: (k2, k2tog) to end.[${this.endToeSts}]\n`+
        `Knit 2 rounds.\n\n`;
        decreaseRound++;
        this.endToeSts -= stitchDecrease;
        pattern += `Decrease round ${decreaseRound}: (k1, k2tog) to end.[${this.endToeSts}]\n`+
        `Knit 1 rounds.\n\n`;
        decreaseRound++;
        this.endToeSts -= stitchDecrease;
        pattern += `Decrease round ${decreaseRound}: (k2tog) to end.[${this.endToeSts}]\n\n`;
        pattern += `Break yarn and pull through remaining sts. Sew a few sts in the same spot to close hole.\n`;
        return pattern;
    }

    getNumRows()
	{
        //number of rows is based on whether the number of sts is a multiple of 8 or only a multiple of 4
        // if it isn't a multiple of 8, an extra row is reequired to make it a multiple of 8
		return numSts % 8 === 0 ?28:29;
	}
}