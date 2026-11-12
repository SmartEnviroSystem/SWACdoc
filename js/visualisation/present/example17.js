// Datasources the user can choose from in the sidebar
window['present_example17_options'] = {
    showSidebar: true,
    datasources: new Map([
        // Same fromName as in the FROM clause: gives the first source a name
        ['Station north', '../../../data/visualisation/present/example17/station_north.json'],
        ['Station south', '../../../data/visualisation/present/example17/station_south.json'],
        // Sources do not need the same attributes
        ['Datasets with gaps', '../../../data/visualisation/present/example9/exampledata_gaps.json']
    ])
};
