window['worldmap2d_example41_options'] = {
    startPointLat: 47.95,
    startPointLon: 11.98,
    zoom: 10,
    datadescription: '#worldmap2d_datadescription_example41',
    // Each value is the value of a satellite raster cell
    areaShape: 'rect',
    // The grid of the satellite data is in degrees [longitude, latitude],
    // with the size in degrees the cells fit together without gaps
    areaSizeDeg: [0.039964, 0.026815],
    // Only draw the cells, no markers (raster data has many locations)
    areaOnly: true,
    // No lines between the cells
    areaStyle: {
        weight: 0,
        fillOpacity: 0.6
    },
    plugins: new Map([
        // All coloring settings are made in the ColorSelect plugin
        ['ColorSelect', {
                id: 'ColorSelect',
                active: true,
                colorAttr: 'VIS006',
                startOpened: true
            }
        ],
        // A click on a cell shows its values
        ['DataShowModal', {
                id: 'DataShowModal',
                active: true
            }
        ]
    ])
};
