window['visualmodel_example12_options'] = {
    stageHeight: 100,
    // Legend definition
    legendMap: new Map([
        ['Kupferkabel','Kk'],
        ['Eisenkabel', 'Ek'],
        ['Lichtphaserkabel', 'Lk']
    ])
};

window['visualmodel_example12_options'].plugins = new Map();
window['visualmodel_example12_options'].plugins.set('Exporter', {
    id: 'Exporter',
    active: false
});