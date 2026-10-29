function show(dataset) {
    document.getElementById('tableactions_result').textContent = dataset.set_json;
}

window['present_example17_options'] = {
    plugins: new Map([
        ['TableActions', {
            id: 'TableActions',
            active: true,
            actions: [
                {id: 'show', icon: 'eye', title: 'Show dataset', onClick: show},
            ]
        }]
    ])
};

// UIkit icons included locally: eye (show), file-edit (edit).
