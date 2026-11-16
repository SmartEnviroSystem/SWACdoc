window['dataselect_example2_options'] = {
    // Only numeric attributes
    attributeTypes: ['int2', 'int4', 'int8', 'float4', 'float8', 'numeric'],
    attributeRequired: true,
    // Adds from and till, preset to the last 30 days
    showPeriod: true
};

// Only called when the browser accepted all inputs
document.addEventListener('submit', function (evt) {
    if (evt.target.id !== 'dataselect_example2_form')
        return;
    evt.preventDefault();
    document.querySelector('#dataselect_example2_result').textContent = 'All inputs are valid.';
});
