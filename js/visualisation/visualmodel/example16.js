window['visualmodel_example16_options'] = {
    stageHeight: 120,
    showScenegraph: false,
    plugins: new Map()
};
window['visualmodel_example16_options'].plugins.set('Data', {
    id: 'Data',
    active: true
});

window['Data_visualmodel_example16_options'] = {
    datasouceattr: 'datasource',
    attrsShown: ['doubleval'],
    datareload: 0, // Time in seconds to auto update data
    datadescription: '#visualmodel_example16dd'
};