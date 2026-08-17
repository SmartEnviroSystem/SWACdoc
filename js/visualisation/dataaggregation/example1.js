import DataAggregation from '/SWAC/swac/DataAggregation.js?ver=17.08.2026.1';

let response = await fetch('../../../data/visualisation/dataaggregation/example1/datasets.json');
let sets = await response.json();
document.getElementById('dataaggregation_example1_source').textContent
        = JSON.stringify(sets, null, 2);

document.getElementById('dataaggregation_example1_run').addEventListener('click', function () {
    let filtered = DataAggregation.filterByTime(sets, 'ts',
            new Date('2026-08-01T10:00:00'), new Date('2026-08-01T10:59:59'));
    let aggregated = DataAggregation.aggregateSets(filtered, 'ts', {
        amount: Number(document.getElementById('dataaggregation_example1_amount').value),
        unit: document.getElementById('dataaggregation_example1_unit').value
    });
    document.getElementById('dataaggregation_example1_result').textContent
            = JSON.stringify(aggregated, null, 2);
});
