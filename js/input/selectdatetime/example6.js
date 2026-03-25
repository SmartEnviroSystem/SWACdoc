window.onload = function () {
    let example6Btn = document.querySelector('#selectdatetime_example6btn');
    // Avoid error if example is commented out
    if (!example6Btn)
        return;
    example6Btn.addEventListener('click', function (evt) {
        let dtElem = document.querySelector('#selectdatetime_example6');
        let data = dtElem.swac_comp.getData()[dtElem.swac_comp.options.fromName];
        let set = data.getSet(1);
        console.log('First set',set);
        // For example static implemented with given name of source and hardcoded dateset id (1)
        alert('The actual inputted date / time is: ' + set.datetime);
    });
};