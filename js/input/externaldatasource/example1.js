import ExternalDataSource from '/SWAC/swac/ExternalDataSource.js';

let output = document.getElementById('externaldatasource_example1');

async function showResult(data, name) {
    let result = await ExternalDataSource.adapt(data, name, 'deterministic');
    output.textContent = JSON.stringify({
        usable: result.usable,
        rowCount: result.rowCount,
        numericAttrs: result.numericAttrs,
        timeAttr: result.timeAttr,
        sets: result.sets
    }, null, 2);
}

ExternalDataSource.loadJson('../../../data/input/externaldatasource/example1/datasets.json')
        .then(data => showResult(data, 'example_file'))
        .catch(error => output.textContent = error.message);

document.getElementById('externaldatasource_example1_file').addEventListener('change', async function () {
    let file = this.files[0];
    if (!file)
        return;
    try {
        await showResult(await ExternalDataSource.readJsonFile(file), file.name);
    } catch (error) {
        output.textContent = error.message;
    }
});
