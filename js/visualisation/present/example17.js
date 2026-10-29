// Functions and configuration can live in the same script (or ES module).
function show(id) {
    document.getElementById('tableactions_result').textContent = 'Show dataset ' + id;
}

function edit(id) {
    document.getElementById('tableactions_result').textContent = 'Edit dataset ' + id;
}

window['present_example17_options'] = {
    plugins: new Map([
        ['TableActions', {
            id: 'TableActions',
            active: true,
            actions: [
                {id: 'show', icon: 'search', title: 'Show dataset', onClick: show},
                {id: 'edit', icon: 'pencil', title: 'Edit dataset', onClick: edit}
            ]
        }]
    ])
};
