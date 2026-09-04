window['charts_example11_options'] = {
    xAxisAttrName: 'ts',
    yAxisAttrNames: ['doubleval'],
    guiFilter: true,
    guiSeries: true,
    plugins: new Map([
        ['DataManager', {
                id: 'DataManager',
                active: true
            }
        ],
        ['Linechart', {
                id: 'Linechart',
                active: true
            }
        ]
    ])
};

window['DataManager_charts_example11_options'] = {
    showAxisSelectors: true
};

window['Datafilterbar_charts_example11_options'] = {
    timeAttr: 'ts',
    filterTarget: 'chart',
    storeFilters: false
};
