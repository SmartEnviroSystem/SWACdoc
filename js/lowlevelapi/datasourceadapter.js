import DataSourceAdapter from '/SWAC/swac/DataSourceAdapter.js';

let source = document.getElementById('datasourceadapter_source');
let output = document.getElementById('datasourceadapter_result');

document.getElementById('datasourceadapter_run').addEventListener('click', function () {
    try {
        let result = DataSourceAdapter.adaptCapsule({
            data: JSON.parse(source.value),
            fromName: 'water_measurements'
        });
        output.textContent = JSON.stringify({
            usable: result.usable,
            rowPath: result.rowPath,
            numericAttrs: result.numericAttrs,
            dateAttrs: result.dateAttrs,
            timeAttr: result.timeAttr,
            sets: result.sets,
            warnings: result.warnings
        }, null, 2);
    } catch (error) {
        output.textContent = 'Invalid JSON: ' + error.message;
    }
});
