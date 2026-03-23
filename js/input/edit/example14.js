// Example 14: Create new datasets from definitions
window['edit_example14_options'] = {
    // the fromName is the source where datasets should be stored when save is called
    fromName: 'airquality_a3',
    showWhenNoData: true,
    allowAdd: true,
    directOpenNew: true,
    definitions: new Map(),
    attrVisibility: [
        {
            hide: ['id']
        }
    ],
    // Custom function to call when autodata was started
    customOnStartAutoData: function() {
        // Calculate a session id and set it to the input field
        let compElem = document.querySelector('#edit_example14');
        let sessElem = compElem.querySelector('[name="session"]');
        const d = new Date();
        let dstr = d.toISOString();
        let dotpos = dstr.indexOf('.');
        dstr = dstr.substring(0,dotpos);
        dstr = dstr.replaceAll('.','_').replaceAll(':','_');
        sessElem.value = dstr;
    }
};
// Attribute definitions
window['edit_example14_options'].definitions.set("airquality_a3", [
    {
        name: 'id',
        type: 'int8',
        isNullable: false,
        isIdentity: true,
        isAutoIncrement: true,
        defaultvalue: 'nextval()'
    },
    {
        name: 'session',
        type: 'varchar'
    },
    {
        name: 'pm10',
        type: 'float8',
        // Special definition for calculateing auto value
        auto: {
            // Use a request here for getting the value, can be any SWAC supported source
            requestor: {fromName: '../../../data/input/edit/example14_autovalue.json',
                fromWheres: {
                    filter: 'id,lt,10'
                }
            },
            update: 5
        }
    },
    {
        name: 'ts',
        type: 'timestamp',
        // Special definition for calculateing auto value
        auto: {
            script: function(inputElem) {
                // Calculate the value
                const d = new Date();
                let dstr = d.toISOString();
                let dotpos = dstr.indexOf('.');
                dstr = dstr.substring(0,dotpos);
                inputElem.value = dstr;
                
                // Find component level
                let compElem = inputElem;
                while(!compElem.hasAttribute('swa') && compElem.parentElement) {
                    compElem = compElem.parentElement;
                }
                // Auto save dataset and create a new one
                if(compElem.swac_comp) {
                    compElem.swac_comp.saveAndNew();
                }
            },
            update: 5
        }
    }
]);