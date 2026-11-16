// Shows a selection without the full dataset (selection.set)
function showSelection(title, selection) {
    let shown = selection ? Object.assign({}, selection, {set: '...'}) : null;
    document.querySelector('#dataselect_example4_output').textContent = title + '\n' + JSON.stringify(shown, null, 2);
}

// Fired on every change of the selection
document.addEventListener('swac_dataselect_example4_dataselect_changed', function (evt) {
    showSelection('Event, changed: ' + evt.detail.changed, evt.detail.selection);
});

// Read the selection at any time
document.addEventListener('click', function (evt) {
    if (evt.target.id !== 'dataselect_example4_btn')
        return;
    let dataselect = document.querySelector('#dataselect_example4').swac_comp;
    showSelection('getSelection()', dataselect.getSelection());
});
