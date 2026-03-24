let onChangeFunc = function (evt) {
    // You are inside the component here
    let inputs = evt.detail.requestor.getInputs();
    let msg = 'You selected:';
    for (let curInput of inputs) {
        msg += ' ' + curInput.name + ' = ' + curInput.value;
    }
    alert(msg);
};

document.addEventListener('swac_select_example6_select_selection_changed',onChangeFunc);
document.addEventListener('swac_select_example6_multiselect_selection_changed',onChangeFunc);
document.addEventListener('swac_select_example6_checkboxes_selection_changed',onChangeFunc);
document.addEventListener('swac_select_example6_datalist_selection_changed',onChangeFunc);