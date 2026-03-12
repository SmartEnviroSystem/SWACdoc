window['upload_example2_options'] = {
    uploadTargetURL: '../../data/input/upload/exampletarget.json',
    dataComponents: [
        {
            selector: '#example2_select',
            sendAttribute: 'selection',
            required: true,
            requiredMessage: 'Please choose a target',
            requiredGt: 0,
            requiredGtMessage: 'The target must be greater than 0.'
        },
        {
            selector: '#example2_name'
        },
        {
            selector: '#example2_email'
        },
        {
            selector: '#example2_message'
        }
    ]
};