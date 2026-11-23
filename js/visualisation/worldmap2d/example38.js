window['worldmap2d_example38_options'] = {
    startPointLat: 52.04,
    startPointLon: 8.56,
    zoom: 10,
    datadescription: '#worldmap2d_datadescription_example38',
    plugins: new Map([
        // All coloring settings are made in the ColorSelect plugin
        ['ColorSelect', {
                id: 'ColorSelect',
                active: true,
                // Combined attribute: how it is calculated from irradiance and cloud cover
                // is described in the datadescription (pv_quality.combine)
                colorAttr: 'pv_quality',
                startOpened: true
            }
        ]
    ])
};
