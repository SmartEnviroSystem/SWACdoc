window['worldmap2d_example38_options'] = {
    startPointLat: 52.04,
    startPointLon: 8.56,
    zoom: 10,
    datadescription: '#worldmap2d_datadescription_example38',
    // Color is calculated from multiple attribute values
    colorCombination: {
        // Attributes that are combined
        attrs: ['irradiance', 'cloudcover'],
        // max / min: color of the attribute with the highest / lowest level
        // avg / weighted: (weighted) average level, color from targetAttr
        // custom: own function
        mode: 'weighted',
        weights: {
            irradiance: 2,
            cloudcover: 1
        },
        // High cloud cover means a low level
        invert: ['cloudcover'],
        // Attribute of the datadescription describing the colors for the combined level (0 - 100)
        targetAttr: 'pv_quality'
        // Alternative with own calculation:
        // mode: 'custom',
        // func: function (values, set, datadescription) {
        //     return 0.7 * (values.irradiance / 1000) + 0.3 * (1 - values.cloudcover / 100);
        // }
    },
    plugins: new Map([
        ['ColorSelect', {
                id: 'ColorSelect',
                active: true
            }
        ]
    ])
};

window['ColorSelect_worldmap2d_example38_options'] = {
    attributes: ['irradiance', 'cloudcover'],
    startOpened: true
};

// Datadescription components options
window['worldmap2d_datadescription_example38_options'] = {
    visuAttribute: 'pv_quality',
    showLegend: false
};
