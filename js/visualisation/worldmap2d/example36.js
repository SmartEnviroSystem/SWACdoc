window['worldmap2d_example36_options'] = {
    startPointLat: 52.04,
    startPointLon: 8.56,
    zoom: 10,
    // CSS selector to the datadescription component that delivers the colors
    datadescription: '#worldmap2d_datadescription_example36',
    plugins: new Map([
        // All coloring settings are made in the ColorSelect plugin
        ['ColorSelect', {
                id: 'ColorSelect',
                active: true,
                // Attribute whose value determines the marker color (set by the administrator)
                colorAttr: 'irradiance',
                // The user can not choose another attribute, only the legend is shown
                userSelect: false,
                startOpened: true
            }
        ]
    ])
};
