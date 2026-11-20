window['collage_example5_options'] = {
    // All images of the collection are shown in one keogram
    pageSize: 1200,
    // The stripe for the keogram and the image shown in large come from the same dataset
    keogramAttr: 'keogram_column_png',
    pathAttr: 'origin_url'
};
window['collage_example5_rows_options'] = {
    pageSize: 1200,
    keogramAttr: 'keogram_line_png',
    pathAttr: 'origin_url'
};

// The form changes both keograms
document.addEventListener('DOMContentLoaded', function () {
    let collageIds = ['collage_example5', 'collage_example5_rows'];
    // Draw the keogram again with only one image per interval, the data is not loaded again
    let interval = document.getElementById('collage_example5_interval');
    interval.addEventListener('change', function () {
        interval.disabled = true;
        let redraws = collageIds.map(curId => document.getElementById(curId).swac_comp.redraw({keogramInterval: Number(interval.value)}));
        Promise.all(redraws).finally(() => interval.disabled = false);
    });
    // The playback uses the new speed from the next image on
    let speed = document.getElementById('collage_example5_speed');
    speed.addEventListener('change', function () {
        for (let curId of collageIds) {
            document.getElementById(curId).swac_comp.options.playInterval = Number(speed.value);
        }
    });
});
