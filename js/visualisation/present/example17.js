function show(dataset) {
    document.getElementById('tableactions_result').textContent = dataset.set_json;
}

function edit(dataset) {
    document.getElementById('tableactions_result').textContent = 'Edit dataset ' + dataset.id;
}

window['present_example17_options'] = {
    plugins: new Map([
        ['TableActions', {
            id: 'TableActions',
            active: true,
            actions: [
                {id: 'show', icon: 'eye', title: 'Show dataset', onClick: show},
                {
                    id: 'edit',
                    icon: 'file-edit',
                    title: 'Edit dataset',
                    visible: dataset => dataset.id % 2 === 0,
                    disabled: dataset => !document.getElementById('tableactions_edit_enabled').checked,
                    onClick: edit
                }
            ]
        }]
    ])
};

// External UI state can change without changing any dataset.
document.addEventListener('swac_present_example17_complete', () => {
    const checkbox = document.getElementById('tableactions_edit_enabled');
    checkbox.disabled = false;
    checkbox.addEventListener('change', () => {
        const view = document.getElementById('present_example17').swac_comp;
        view.getPlugin('TableActions').swac_comp.refresh();
    });
});
