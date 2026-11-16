window['present_example18_options'] = {
    plugins: new Map([
        ['TableHierarchy', {
            id: 'TableHierarchy',
            active: true,
            linear: true,
            expandWhen: dataset => document.getElementById('tablehierarchy_autoexpand').checked
                && dataset.highlighted === true,
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

// Reevaluate the predicate after external UI state changes.
document.addEventListener('swac_present_example18_complete', () => {
    const checkbox = document.getElementById('tablehierarchy_autoexpand');
    checkbox.disabled = false;
    checkbox.addEventListener('change', () => {
        const view = document.getElementById('present_example18').swac_comp;
        view.getPlugin('TableHierarchy').swac_comp.render();
    });
});
