import AIDataSourceAdapter from '/SWAC/swac/AIDataSourceAdapter.js';

let sourceJson = {
    measurements: [
        {
            observedAt: '2026-08-01T10:00:00Z',
            values: {temperature: 18.4, conductivity: 420}
        },
        {
            observedAt: '2026-08-01T10:05:00Z',
            values: {temperature: 18.8, conductivity: 424}
        }
    ]
};

let result = await AIDataSourceAdapter.adaptCapsule({
    data: sourceJson,
    fromName: 'external_measurements'
}, {mode: 'deterministic'});

document.getElementById('aiadaptation_result').textContent = JSON.stringify({
    usable: result.usable,
    adaptation: result.adaptation,
    numericAttrs: result.numericAttrs,
    timeAttr: result.timeAttr,
    sets: result.sets,
    warnings: result.warnings
}, null, 2);
