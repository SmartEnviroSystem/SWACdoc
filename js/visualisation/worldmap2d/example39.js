window['worldmap2d_example39_options'] = {
    startPointLat: 52.02,
    startPointLon: 8.52,
    zoom: 11,
    datadescription: '#worldmap2d_datadescription_example39',
    // Each value is ment for an area of 3 x 3 km around the location (raster cell)
    areaShape: 'rect',
    areaSize: 3000,
    plugins: new Map([
        // All coloring settings are made in the ColorSelect plugin
        ['ColorSelect', {
                id: 'ColorSelect',
                active: true,
                // Attribute whose value determines the color of markers and areas
                colorAttr: 'irradiance',
                // The user can choose another attribute, markers and areas are recolored
                startOpened: true
            }
        ]
    ])
};
