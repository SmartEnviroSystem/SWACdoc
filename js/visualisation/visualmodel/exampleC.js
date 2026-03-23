window['visualmodel_exampleC_options'] = {
    stageHeight: 100
};

document.addEventListener('swac_ready', function () {
    let addBtn = document.querySelector('.add_datasource2');
    addBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        let exampleElem = document.querySelector('#visualmodel_exampleC');
        // Add child datasets
        exampleElem.swac_comp.addDataFromReference('ref://../../../data/visualisation/visualmodel/exampleC/modeldefinition2.json?filter=parent;eq;1', 'id');
    });

    let remBtn = document.querySelector('.remove_datasource2');
    remBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        let exampleElem = document.querySelector('#visualmodel_exampleC');
        console.log(exampleElem.swac_comp.data);
        // Add child datasets
        exampleElem.swac_comp.removeData('../../../data/visualisation/visualmodel/exampleC/modeldefinition2.json', 'id');
    });
});
