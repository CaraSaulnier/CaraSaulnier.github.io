export default class Cuff{

    numRows;

    constructor(rowGauge, length){
        this.numRows = Math.round(rowGauge*length);
    }
    
    getCuffPattern(){
        return `
        error, a cuff has not been selected.
        `;
    }

    getNumRows(){
        return this.numRows;
    }
}