import Sock from './Sock.js';
import TopDownSock from './TopDownSock.js';
import BottomUpSock from './BottomUpSock.js';

function setSockDirection() {
    const construction = document.getElementById('construction').value;
    const heelSelect = document.getElementById('heel');
    const toeSelect = document.getElementById('toe');

    // Clear existing options
    heelSelect.innerHTML = '';
    toeSelect.innerHTML = '';

    let heelOptions = [];
    let toeOptions = [];

    if (construction === 'BottomUp') {
        heelOptions = [
            { value: 'BoomerangHeel', text: 'Boomerang Heel' },
            { value: 'BUGussetHeel', text: 'Gusset Heel' },
            { value: 'SimpleShapedHeel', text: 'Simple Shaped Heel' },
            { value: 'WrapAndTurnHeel', text: 'Wrap and Turn Heel' }
        ];
        toeOptions = [
            {value: 'BUBandedToe', text: 'Banded Toe'},
            {value: 'BUBasicToe', text: 'Basic Toe'},
            {value: 'BUWedgeToe', text: 'Wedge Toe'}
        ];
    } else if (construction === 'TopDown') {
        heelOptions = [
            { value: 'BoomerangHeel', text: 'Boomerang Heel' },
            { value: 'TDCommonHeel', text: 'Common Heel' },
            { value: 'TDGarterStitchHeel', text: 'Garter Stitch Heel' },
            { value: 'SimpleShapedHeel', text: 'Simple Shaped Heel' },
            { value: 'TDSlipStitchHeel', text: 'Slip Stitch Heel' },
            { value: 'TDStripedHeel', text: 'Striped Heel' },
            { value: 'WrapAndTurnHeel', text: 'Wrap and Turn Heel' }
        ];
        toeOptions = [
            {value: 'TDBandedToe', text: 'Banded Toe'},
            {value: 'TDFourPointToe', text: 'Four Point Toe'},
            {value: 'TDRoundedToe', text: 'Rounded Toe'},
            {value: 'TDWedgeToe', text: 'Wedge Toe'}
        ];
    }

    for (const opt of heelOptions) {
        const option = document.createElement('option');
        option.value = opt.value;
        option.text = opt.text;
        heelSelect.appendChild(option);
    }

    for (const opt of toeOptions){
        const option = document.createElement('option');
        option.value = opt.value;
        option.text = opt.text;
        toeSelect.appendChild(option);
    }
}

// circumference, soleLength, legLength, cuffLength, stsPerGauge, rowsPerGauge, 
// lengthStsGauge, lengthRowsGauge, easeSelection, cuffSelection, heelSelection, toeSelection
function generatePattern() {
    if (typeof Sock === 'undefined') {
        console.log("Sock class is not loaded. Check your script path.");
        alert("Sorry, something went wrong. Sock pattern generator is not available.");
        return;
    }
    const circumference = parseFloat(document.getElementById('circum').value);
    const soleLength = parseFloat(document.getElementById('lenfoot').value);
    const legLength = parseFloat(document.getElementById('lenleg').value);
    const cuffLength = parseFloat(document.getElementById('lencuff').value);
    const stsPerGauge = parseFloat(document.getElementById('stspergauge').value);
    const rowsPerGauge = parseFloat(document.getElementById('rowspergauge').value);
    const lengthStsGauge = parseFloat(document.getElementById('lenstsgauge').value);
    const lengthRowsGauge = parseFloat(document.getElementById('lenrowgauge').value);
    const ease = parseFloat(document.getElementById('ease').value) / 100;
    console.log(circumference);
    let cuffSelection = 0;
    switch(document.getElementById('cuff').value)
    {
        case "1x1 Rib":
            cuffSelection = 1;
            break;
        case "2x2 Rib":
            cuffSelection = 2;
            break;
        case "3x1 Rib":
            cuffSelection = 3;
            break;
        case "Half Twisted Rib":
            cuffSelection = 4;
            break;
        case "Picot Edge":
            cuffSelection = 5;
            break;
        case "Two-Colour Rib":
            cuffSelection = 6;
            break;
        default:
            cuffSelection = 0;
            break;
    }
    const construction = document.getElementById('construction').value;
    let heelSelection = 0;
    let toeSelection = 0;
    if(construction === "BottomUp")
    {
        console.log("bottom up");
        switch(document.getElementById('heel').value)
        {
            case("BoomerangHeel"):
                heelSelection = 1;
                break;
            case("BUGussetHeel"):
                heelSelection = 2;
                break;
            case("SimpleShapedHeel"):
                heelSelection = 3;
                break;
            case("WrapAndTurnHeel"):
                heelSelection = 4;
                break;
            default:
                heelSelection = -1;
        }
        switch(document.getElementById('toe').value)
        {
            case("BUBandedToe"):
                toeSelection = 1;
                break;
            case("BUBasicToe"):
                toeSelection = 2;
                break;
            case("BUWedgeToe"):
                toeSelection = 3;
                break;
            default:
                toeSelection = -1;
        }
        const sock = new BottomUpSock(
            circumference, soleLength, legLength, cuffLength,
            stsPerGauge, rowsPerGauge, lengthStsGauge, lengthRowsGauge,
            ease, cuffSelection, heelSelection, toeSelection);
        document.getElementById('pattern').innerText = sock.getSockPattern();
    }
    else if(construction === "TopDown")
    {
        switch(document.getElementById('heel').value)
        {
            case "BoomerangHeel":
                heelSelection = 1;
                break;
            case "TDCommonHeel":
                heelSelection = 2;
                break;
            case "TDGarterStitchHeel":
                heelSelection = 3;
                break;
            case "SimpleShapedHeel":
                heelSelection = 4;
                break;
            case "TDSlipStitchHeel":
                heelSelection = 5;
                break;
            case "TDStripedHeel":
                heelSelection = 6;
                break;
            case "WrapAndTurnHeel":
                heelSelection = 7;
                break;
            default:
                heelSelection = -1;
                break;
        }
        switch(document.getElementById('toe').value)
        {
            case "TDBandedToe":
                toeSelection = 1;
                break;
            case "TDFourPointToe":
                toeSelection = 1;
                break;
            case "TDRoundedToe":
                toeSelection = 2;
                break;
            case "TDWedgeToe":
                toeSelection = 4;
                break;
            default:
                toeSelection = -1;
                break;
        }

        const sock = new TopDownSock(
            circumference, soleLength, legLength, cuffLength,
            stsPerGauge, rowsPerGauge, lengthStsGauge, lengthRowsGauge,
            ease, cuffSelection, heelSelection, toeSelection);
        document.getElementById('pattern').innerText = sock.getSockPattern();
    }
    else
    {
        console.log("neither");
        const sock = new Sock(
            circumference, soleLength, legLength, cuffLength,
            stsPerGauge, rowsPerGauge, lengthStsGauge, lengthRowsGauge,
            ease, cuffSelection);
        document.getElementById('pattern').innerText = sock.getSockPattern();
    }
}
window.setSockDirection = setSockDirection;
window.generatePattern = generatePattern;