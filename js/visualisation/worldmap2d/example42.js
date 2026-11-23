window['worldmap2d_example42_options'] = {
    startPointLat: 52.015,
    startPointLon: 8.547,
    zoom: 11,
    datadescription: '#worldmap2d_datadescription_example42',
    // Raster display: each value is ment for a rectangle around its location
    areaShape: 'rect',
    // Size of the raster in meters [width (longitude), height (latitude)]: 3 km x 2 km
    areaSize: [3000, 2000],
    areaStyle: {
        weight: 1,
        fillOpacity: 0.5
    },
    plugins: new Map([
        // Color of markers and areas from the datadescription
        ['ColorSelect', {
                id: 'ColorSelect',
                active: true,
                colorAttr: 'irradiance',
                startOpened: true
            }
        ]
    ])
};
