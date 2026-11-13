window['worldmap2d_example40_options'] = {
    startPointLat: 52.0,
    startPointLon: 8.6,
    zoom: 10,
    datadescription: '#worldmap2d_datadescription_example40',
    // Each station observes the sky in a circle of 8 km diameter around it
    areaShape: 'circle',
    areaSize: 8000,
    // Dark lines around the areas, the fill color comes from the datadescription
    areaStyle: {
        color: '#333333',
        weight: 1,
        fillOpacity: 0.45
    },
    // Size of the icons given per dataset with map_icon
    mapIconOptions: {
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36]
    },
    plugins: new Map([
        // All coloring settings are made in the ColorSelect plugin
        ['ColorSelect', {
                id: 'ColorSelect',
                active: true,
                // Fill color from irradiance, datasets can use another attribute with map_areacolorattr
                colorAttr: 'irradiance',
                userSelect: false,
                startOpened: true
            }
        ]
    ])
};
