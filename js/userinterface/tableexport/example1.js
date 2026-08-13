import TableExport from '/SWAC/swac/TableExport.js';

let table = document.getElementById('tableexport_example1');
for (let button of document.querySelectorAll('[data-tableexport-format]')) {
    button.addEventListener('click', function () {
        TableExport.exportTable(table, 'measurement_example', button.dataset.tableexportFormat);
    });
}
