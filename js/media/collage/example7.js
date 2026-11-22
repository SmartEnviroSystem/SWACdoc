// Datasources the user can choose from in the sidebar, e.g. the images of different cameras
window['collage_example7_options'] = {
    showSidebar: true,
    datasources: new Map([
        // Same fromName as in the FROM clause: gives the first source a name
        ['Sky images with timestamp', {
            fromName: '../../../data/media/collage/example1/skyimages.json',
            fromWheres: {order: 'ts,ASC'}
        }],
        // Without own size the page size of the first source is used
        ['Sky images without timestamp', '../../../data/media/collage/example2/skyimages.json']
    ])
};
