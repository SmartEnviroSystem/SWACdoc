window['present_example18_options'] = {
    plugins: new Map([
        ['TableHierarchy', {
            id: 'TableHierarchy',
            active: true,
            linear: true,
            relations: [
                {parentId: 1, childId: 2},
                {parentId: 2, childId: 3},
                {parentId: 5, childId: 6}
            ]
            // Alternatively: loadRelations: async (view) => [...]
            // The page can load a separate source using window.swac.Model.load().
        }],
        ['TableFilter', {id: 'TableFilter', active: true}],
        ['TableSort', {id: 'TableSort', active: true}]
    ])
};