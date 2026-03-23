// Example 7: Create new datasets from definitions
window['edit_example7_options'] = {
    fromName: 'observedobject/list',
    showWhenNoData: true,
    allowAdd: true,
    directOpenNew: true,
    definitions: new Map()
};
window['edit_example7_options'].definitions.set("observedobject/list", [
    {
        name: 'id',
        type: 'int8',
        isNullable: false,
        isIdentity: true,
        isAutoIncrement: true,
        defaultvalue: 'nextval()'
    }, {
        name: 'name',
        type: 'varchar',
        isNullable: false
    },
    {
        name: 'doubleval',
        type: 'float8'
    },
    {
        name: 'intval',
        type: 'int8'
    },
    {
        name: 'boolval',
        type: 'bool'
    },
    {
        name: 'stringval',
        type: 'varchar'
    },
    {
        name: 'ts',
        type: 'timestamp'
    },
    {
        name: 'dateval',
        type: 'date'
    },
    {
        name: 'timeval',
        type: 'time'
    },
    {
        name: 'refval',
        type: 'reference'
    },
    {
        name: 'mimetype',
        type: 'varchar'
    },
    {
        name: 'colval',
        type: 'color'
    },
    {
        name: 'urlval',
        type: 'url'
    },
    {
        name: 'emailval',
        type: 'email'
    },
    {
        name: 'passwordval',
        type: 'password'
    }
]);

