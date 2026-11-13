window['worldmap2d_example37_options'] = {
    startPointLat: 52.04,
    startPointLon: 8.56,
    zoom: 10,
    datadescription: '#worldmap2d_datadescription_example37',
    plugins: new Map([
        // All coloring settings are made in the ColorSelect plugin
        ['ColorSelect', {
                id: 'ColorSelect',
                active: true,
                // Coloring used until the user chooses another attribute
                colorAttr: 'irradiance',
                // The user can choose from all attributes described in the datadescription
                userSelect: true,
                // Show the selection when the page is loaded
                startOpened: true
            }
        ]
    ])
};
