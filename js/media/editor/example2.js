window['mediaeditor_example2_options'] = {
    showWhenNoData: true,
    usemodal: true,
    plugins: new Map()
};
window['mediaeditor_example2_options'].plugins.set('Mediatags', {
    id: 'Mediatags',
    active: true
});

window["Mediatags_mediaeditor_example2_options"] = {
    tagsrequestor: {
        fromName: '../../../data/media/editor/example2/tags_{media.id}.json', // 'tagmedia/listForMedia',
        fromWheres: {
            media_id: '{media.id}'
        }
    },
    tagtypesrequestor: {
        fromName: '../../../data/media/editor/example2/tagtypes.json', // 'tagtype/listByTargetUseage',
        fromWheres: {
            useage: 'mediaTag'
        }
    }
};