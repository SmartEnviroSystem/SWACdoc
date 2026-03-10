window['sync_example3_options']={
    syncTarget: '/SmartDataTest/smartdata/records/target_table?storage=smartmonitoring',
    // Name of the attribute that indicates the snync state
    syncedFlagAttribute: 'synced',
    syncModeRequestor: {
        fromName: 'userinterface/sync/example3/syncmode.json'
    },
    syncStartRequestor: {
        fromName: 'userinterface/sync/example3/syncmodetoggle.json'
    },
    syncStopRequestor: {
        fromName: 'userinterface/sync/example3/syncmodetoggle.json'
    }
};