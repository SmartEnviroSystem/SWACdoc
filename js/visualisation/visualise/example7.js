// Example 7: CircleValue
window['example7_circlevalue_options'] = {
    visus: [{
            attr: 'doubleval',
            type: 'CircleValue',
            datadescription: '#example7_circlevalue_legend'
        }]
};
window['circlevalue_legend'] = {
    doubleval: {
        txt_title: 'A double value',
        txt_desc: 'Some value as double',
        txt_uknw: 'Unknown value',
        minValue: 0,
        maxValue: 1100,
        calcmode: '<',
        values: {
            '300': {
                txt: 'ein niedriger Wert',
                col: 'green'
            },
            '600': {
               txt: 'ein mittelhoher Wert',
                col: 'yellow'
            },
            '1300': {
                txt: 'ein hoher Wert',
                col: 'red'
            }
        }
    }
};