window['visualmodel_example15_options'] = {
    stageHeight: 120,
    showScenegraph: false,
    plugins: new Map()
};
window['visualmodel_example15_options'].plugins.set('Data', {
    id: 'Data',
    active: true
});

window['Data_visualmodel_example15_options'] = {
    datasouceattr: 'datasource',
    attrsShown: ['doubleval'],
    datareload: 0 // Time in seconds to auto update data
};