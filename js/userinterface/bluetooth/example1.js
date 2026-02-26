/**
 * example1.js
 * Project-specific configuration for bluetooth_example1 — Sensor Pi full control panel.
 *
 * This file is the SINGLE source of truth for everything that appears on a device card.
 * Bluetooth.js contains NO default sections. If this file provides an empty sections array
 * (or omits it entirely), no buttons will be rendered after connecting a device.
 *
 * To create an independent second project (e.g. example2.js):
 *   1. Copy this file and rename it.
 *   2. Adjust the sections array as needed.
 *   3. Point the <script> tag in your HTML at the new file.
 *   Bluetooth.js itself never needs to be modified.
 *
 * ── Section schema ────────────────────────────────────────────────────────────
 *
 * Regular section (renders a grid of buttons):
 * {
 *   title:   string,       // heading shown above the button group
 *   buttons: ButtonDef[]   // see ButtonDef schema below
 * }
 *
 * WLAN section (renders a built-in SSID / password form instead of buttons):
 * {
 *   title:               string,  // section heading
 *   type:                'wlan',  // triggers the WLAN form renderer
 *   icon:                string,  // emoji shown on the submit button  (optional, default: '📶')
 *   label:               string,  // submit button name                (optional, default: 'Add WLAN')
 *   description:         string,  // subtitle on the submit button     (optional)
 *   ssidPlaceholder:     string,  // placeholder for the SSID field    (optional)
 *   passwordPlaceholder: string   // placeholder for the password field (optional)
 * }
 *
 * ── ButtonDef schema ─────────────────────────────────────────────────────────
 * {
 *   icon:        string,  // emoji displayed on the button
 *   label:       string,  // short button name
 *   description: string,  // subtitle shown below the label
 *   action:      string,  // method name on the Bluetooth instance; receives (deviceId)
 *   style?:      string   // optional CSS modifier: 'warn' (orange) | 'danger' (red)
 * }
 *
 * ── Available built-in actions (defined in Bluetooth.js) ─────────────────────
 *   sendTimeStamp, getMacAddress, startMeasurement, stopMeasurement,
 *   getLastMeasuring, measuringStatus, smartMobileStatus,
 *   aggregationOn, aggregationOff, aggregationStatus,
 *   synchronizeDataOn, synchronizeDataOff, synchronizeDataStatus,
 *   stopAll, rebootPi, shutDownPi
 *
 * Custom actions can be added by extending the Bluetooth class or by attaching
 * additional methods to the instance inside the onConnected callback.
 */
window["bluetooth_example1_conf_options"] = {

    // Only devices whose BLE name starts with one of these prefixes
    // will appear in the browser device picker.
    filterDevices: [
        {namePrefix: 'Sensor'},
        {namePrefix: 'sensor'},
        {namePrefix: 'SENSOR'}
    ],

    // Maximum number of simultaneously connected devices. 0 = unlimited.
    maxDevices: 0,

    // ── Command sections rendered on each device card ─────────────────────────
    // Remove, reorder, or extend sections here — no changes to Bluetooth.js needed.
    // Set sections: [] or remove the property entirely to show NO buttons at all.
    sections: [
        {
            title: 'General',
            buttons: [
                {
                    icon: '🕐',
                    label: 'Timestamp',
                    description: 'Send current time to Pi',
                    action: 'sendTimeStamp'
                },
                {
                    icon: '📡',
                    label: 'MAC Address',
                    description: 'Read MAC address from Pi',
                    action: 'getMacAddress'
                },
                {
                    icon: 'ℹ️',
                    label: 'Device Status',
                    description: 'Query general device status',
                    action: 'smartMobileStatus'
                }
            ]
        },
        {
            title: 'Measurement',
            buttons: [
                {
                    icon: '▶️',
                    label: 'Start',
                    description: 'Start sensor measurement',
                    action: 'startMeasurement'
                },
                {
                    icon: '⏹️',
                    label: 'Stop',
                    description: 'Stop sensor measurement',
                    action: 'stopMeasurement',
                    style: 'warn'
                },
                {
                    icon: 'ℹ️',
                    label: 'Meas. Status',
                    description: 'Query current measurement state',
                    action: 'measuringStatus'
                },
                {
                    icon: '📊',
                    label: 'Last Data',
                    description: 'Fetch last recorded measurement',
                    action: 'getLastMeasuring'
                }
            ]
        },
        {
            title: 'Aggregation',
            buttons: [
                {
                    icon: '🗃️',
                    label: 'Aggr. ON',
                    description: 'Start data aggregation',
                    action: 'aggregationOn'
                },
                {
                    icon: '🚫',
                    label: 'Aggr. OFF',
                    description: 'Stop data aggregation',
                    action: 'aggregationOff',
                    style: 'warn'
                },
                {
                    icon: 'ℹ️',
                    label: 'Aggr. Status',
                    description: 'Query aggregation state',
                    action: 'aggregationStatus'
                }
            ]
        },
        {
            title: 'Synchronisation',
            buttons: [
                {
                    icon: '☁️',
                    label: 'Sync ON',
                    description: 'Start data synchronisation',
                    action: 'synchronizeDataOn'
                },
                {
                    icon: '🚫',
                    label: 'Sync OFF',
                    description: 'Stop data synchronisation',
                    action: 'synchronizeDataOff',
                    style: 'warn'
                },
                {
                    icon: 'ℹ️',
                    label: 'Sync Status',
                    description: 'Query synchronisation state',
                    action: 'synchronizeDataStatus'
                }
            ]
        },

        // ── WLAN Configuration Section ─────────────────────────────────────────
        // Remove this object to hide the WLAN form entirely.
        {
            title: 'Connectivity',
            type: 'wlan',
            icon: '📶',
            label: 'Add WLAN',
            description: 'Configure WiFi credentials on the Pi',
            ssidPlaceholder: 'WLAN Name (SSID)',
            passwordPlaceholder: 'Password'
        },

        {
            title: 'System',
            buttons: [
                {
                    icon: '🛑',
                    label: 'Stop All',
                    description: 'Stop all running jobs',
                    action: 'stopAll',
                    style: 'danger'
                },
                {
                    icon: '🔁',
                    label: 'Reboot',
                    description: 'Reboot the Pi',
                    action: 'rebootPi',
                    style: 'danger'
                },
                {
                    icon: '📴',
                    label: 'Shutdown',
                    description: 'Shut down the Pi',
                    action: 'shutDownPi',
                    style: 'danger'
                }
            ]
        }
    ]
};