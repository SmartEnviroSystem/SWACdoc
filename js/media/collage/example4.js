/*
 * Builds the collage of example 4 from the form values.
 * The options are given as URL parameters collage_example4_<option>, SWAC applies them automatically.
 * This script must be included at the end of the page, so that it runs before SWAC creates the component.
 */
const collage_example4_sources = {
    file: {
        from: '../../../data/media/collage/example1/skyimages.json',
        wheres: ['order=ts,ASC'],
        options: {}
    },
    nots: {
        from: '../../../data/media/collage/example2/skyimages.json',
        wheres: [],
        options: {}
    },
    smartdata: {
        from: '/SmartDataHELIOS/smartdata/records/unimunic_asi',
        wheres: ['storage=smartmonitoring', 'order=ts,ASC', 'includes=id,ts,origin_url'],
        options: {pathAttr: 'origin_url'}
    }
};
const collage_example4_optnames = ['mode', 'pageSize', 'jumpSeconds', 'jumpImages', 'playInterval'];

(function () {
    let params = new URLSearchParams(window.location.search);
    let sourceName = collage_example4_sources[params.get('source')] ? params.get('source') : 'file';
    let source = collage_example4_sources[sourceName];

    // Options that belong to the datasource, the others come from the URL
    window['collage_example4_options'] = Object.assign({}, source.options);
    let shownOptions = Object.assign({}, source.options);
    for (let curName of collage_example4_optnames) {
        let value = params.get('collage_example4_' + curName);
        if (value)
            shownOptions[curName] = isNaN(value) ? value : Number(value);
    }

    let wheres = source.wheres.concat('size=' + (shownOptions.pageSize || 20));
    let swa = 'Collage FROM ' + source.from + ' WHERE ' + wheres.join(' AND ');
    document.getElementById('collage_example4').setAttribute('swa', swa);

    // Fill the form with the actual values
    let form = document.getElementById('collage_example4_form');
    form.elements['source'].value = sourceName;
    for (let curName of collage_example4_optnames) {
        let value = params.get('collage_example4_' + curName);
        if (value)
            form.elements['collage_example4_' + curName].value = value;
    }
    // Leave empty fields out of the URL, so that the defaults are used
    form.addEventListener('submit', function () {
        for (let curElem of form.elements) {
            if (curElem.name && !curElem.value)
                curElem.disabled = true;
        }
    });

    // Show the code for the chosen configuration
    let optLines = Object.keys(shownOptions).map(name => '    ' + name + ': ' + JSON.stringify(shownOptions[name]).replaceAll('"', "'"));
    document.getElementById('collage_example4_code').textContent =
            '<div id="collage_example4" swa="' + swa + '"></div>\n\n'
            + '<script>\n'
            + "window['collage_example4_options'] = {" + (optLines.length ? '\n' + optLines.join(',\n') + '\n' : '') + '};\n'
            + '</script>';
})();
