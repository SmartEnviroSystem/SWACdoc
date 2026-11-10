window['charts_example4_options'] = {
    xAxisAttrName: 'intval',
    yAxisAttrNames: ['doubleval'],
    plugins: new Map([
        ['Barchart', {id: 'Barchart', active: true}],
        ['Linechart', {id: 'Linechart', active: true, timeAttr: 'ts'}],
        ['Piechart', {id: 'Piechart', active: true}],
        ['Datafilterbar', {id: 'Datafilterbar', active: false}]
    ])
};
