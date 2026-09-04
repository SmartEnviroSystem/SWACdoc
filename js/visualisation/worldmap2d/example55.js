window['worldmap2d_example55_options'] = {
    startPointLon: 8.905,
    startPointLat: 52.296,
    zoom: 14,
    latAttr: 'latitude',
    lonAttr: 'longitude',
    clusterMarkers: false,
    plugins: new Map([['RouteAnalytics', {
                id: 'RouteAnalytics',
                active: true
            }]])
};

window['RouteAnalytics_worldmap2d_example55_options'] = {
    routeAttr: 'measurement_name',
    routeKeyAttrs: ['measurement_process'],
    valueAttrs: ['pm2_5', 'pm10_0'],
    healthAttrs: ['pm2_5', 'pm10_0'],
    healthThresholdsByAttr: {
        pm2_5: {good: 10, medium: 25},
        pm10_0: {good: 15, medium: 45}
    },
    tsAttr: 'ts',
    altitudeAttr: 'altitude',
    groupUnroutedPoints: true,
    summaryTarget: '#worldmap2d_example55_summary'
};
