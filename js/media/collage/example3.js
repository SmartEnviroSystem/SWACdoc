window['collage_example3_options'] = {
    pageSize: 12,
    // The images of the datasets are available on the server of the LMU
    pathAttr: 'origin_url'
};

// Show the images beginning at the timepoint from the form
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('collage_example3_form').addEventListener('submit', function (evt) {
        evt.preventDefault();
        let timepoint = document.getElementById('collage_example3_timepoint').value;
        document.getElementById('collage_example3').swac_comp.showTimepoint(timepoint);
    });
});
