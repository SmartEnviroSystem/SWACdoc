window['collage_example6_options'] = {
    // All images of the file are shown in one keogram
    pageSize: 201,
    mode: 'keogram_columns',
    // Cut the stripes out of the images instead of using stored stripes
    keogramFromImage: true,
    // Middle of the image, one pixel thick
    keogramPosition: 50,
    keogramThickness: 1
};

// Draw the keogram again with the cut from the form
document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('collage_example6_form');
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        let options = {};
        for (let curElem of form.elements) {
            if (!curElem.name)
                continue;
            // An empty stripe width uses the thickness
            options[curElem.name] = curElem.value === '' ? null : (isNaN(curElem.value) ? curElem.value : Number(curElem.value));
        }
        let button = form.querySelector('button');
        button.disabled = true;
        document.getElementById('collage_example6').swac_comp.redraw(options).finally(() => button.disabled = false);
    });
    // Show the value of the slider while moving it
    let position = document.getElementById('collage_example6_position');
    position.addEventListener('input', function () {
        document.getElementById('collage_example6_position_value').textContent = position.value + ' %';
    });
});
