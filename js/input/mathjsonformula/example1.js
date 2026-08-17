import MathJsonFormula from '/SWAC/swac/MathJsonFormula.js?ver=17.08.2026.1';
import {loadMathLive} from '/SWAC/swac/libs/mathlive/MathLiveLoader.js?ver=17.08.2026.1';

let output = document.getElementById('mathjsonformula_example1');
let MathfieldElement = await loadMathLive();
let field = new MathfieldElement();
field.value = '10\\times10-40';
document.getElementById('mathjsonformula_example1_editor').appendChild(field);

function convertFormula() {
    try {
        let mathJson = MathJsonFormula.fromLatex(
                field.getValue('latex-unstyled'), MathfieldElement.computeEngine);
        let formula = MathJsonFormula.toFormula(mathJson);
        if (!mathJson || !formula)
            throw new Error('The formula uses unsupported expressions.');
        output.textContent = JSON.stringify({
            mathJson: mathJson,
            formula: formula
        }, null, 2);
    } catch (error) {
        output.textContent = 'Could not convert formula: ' + error.message;
    }
}

document.getElementById('mathjsonformula_example1_convert').addEventListener('click', convertFormula);
field.addEventListener('input', convertFormula);
convertFormula();
