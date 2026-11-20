window['worldmap2d_example37_options'] = {
    startPointLat: 52.04,
    startPointLon: 8.56,
    zoom: 10,
    datadescription: '#worldmap2d_datadescription_example37',
    // Coloring used until the user chooses another attribute
    colorAttr: 'irradiance',
    plugins: new Map([
        // Add ColorSelect plugin, that lets the user choose the attribute for coloring
        ['ColorSelect', {
                id: 'ColorSelect',
                active: true
            }
        ]
    ])
};

// ColorSelect plugin options
window['ColorSelect_worldmap2d_example37_options'] = {
    // Attributes the user can choose from (default: all attributes with values in the datadescription)
    attributes: ['irradiance', 'cloudcover', 'temperature'],
    // Show the selection when the page is loaded
    startOpened: true
};

// Datadescription components options
window['worldmap2d_datadescription_example37_options'] = {
    visuAttribute: 'irradiance',
    // Legend is shown by the ColorSelect plugin
    showLegend: false
};
