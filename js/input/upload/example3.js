window['upload_example3_options'] = {
    uploadTargetURL: 'http://localhost/media/upload.php',
    uploadresultcollection: 'upload_result', // Name of the target where to save data. If omitted the save button is not displayed.
    definitions: new Map()
};
window['upload_example3_options'].definitions.set("upload_result", [
    {
        name: 'id',
        type: 'int8',
        isNullable: false,
        isIdentity: true,
        isAutoIncrement: true,
        defaultvalue: 'nextval()',
        generated: true
    }, {
        name: 'filename',
        type: 'varchar',
        generated: true
    },{
        name: 'title',
        type: 'varchar',
        isNullable: false
    },
    {
        name: 'year',
        type: 'int4'
    }
]);