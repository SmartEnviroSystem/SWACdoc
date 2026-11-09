window['worldmap2d_example39_options'] = {
    startPointLat: 52.02,
    startPointLon: 8.52,
    zoom: 11,
    datadescription: '#worldmap2d_datadescription_example39',
    // Each value is ment for an area of 3 x 3 km around the location (raster cell)
    areaShape: 'rect',
    areaSize: 3000,
    // Attribute whose value determines the fill color of the areas
    areaColorAttr: 'irradiance',
    // Markers are colored by the same attribute
    colorAttr: 'irradiance',
    plugins: new Map([
        // The user can choose another attribute, markers and areas are recolored
        ['ColorSelect', {
                id: 'ColorSelect',
                active: true
            }
        ]
    ])
};

window['ColorSelect_worldmap2d_example39_options'] = {
    attributes: ['irradiance', 'cloudcover'],
    startOpened: true
};

// Datadescription components options
window['worldmap2d_datadescription_example39_options'] = {
    visuAttribute: 'irradiance',
    showLegend: false
};
