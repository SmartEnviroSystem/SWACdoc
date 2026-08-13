import MathJsonFormula from '/SWAC/swac/MathJsonFormula.js';
import {loadMathLive} from '/SWAC/swac/libs/mathlive/MathLiveLoader.js';

let output = document.getElementById('mathjsonformula_example1');
let MathfieldElement = await loadMathLive();
let field = new MathfieldElement();
field.value = '10\\times10-40';
document.getElementById('mathjsonformula_example1_editor').appendChild(field);

document.getElementById('mathjsonformula_example1_convert').addEventListener('click', function () {
    let mathJson = MathJsonFormula.parse(field.getValue('math-json'));
    let formula = MathJsonFormula.toFormula(mathJson);
    output.textContent = JSON.stringify({
        mathJson: mathJson,
        formula: formula
    }, null, 2);
});
