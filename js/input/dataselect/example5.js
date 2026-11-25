window['dataselect_example5_options'] = {
    // Several datasets can be selected with checkboxes in a dropdown
    multiple: true,
    // Only numeric attributes
    attributeTypes: ['int2', 'int4', 'int8', 'float4', 'float8', 'numeric']
};

// Shows the selection without the full datasets (set)
function showSelection(selection) {
    let shown = null;
    if (selection) {
        shown = Object.assign({}, selection, {set: '...'});
        shown.sets = selection.sets.map(curSet => Object.assign({}, curSet, {set: '...'}));
    }
    document.querySelector('#dataselect_example5_output').textContent = JSON.stringify(shown, null, 2);
}

document.addEventListener('swac_dataselect_example5_dataselect_changed', function (evt) {
    showSelection(evt.detail.selection);
});
