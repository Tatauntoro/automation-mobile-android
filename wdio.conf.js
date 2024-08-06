import path from "path";

export const config = {
    
    runner: 'local',
    port: 4723,
    specs: [
        './src/specs/*.js'
    ],
    
    exclude: [],
    suites: {
        orderCompleted: ["./src/specs/order-completed.js"],
        orderUnsuccessful: ["./src/specs/order-unsuccessfull.js"],
      },
    maxInstances: 10,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        'platformName': 'Android',
        'appium:deviceName': 'Pixel 7 Pro API 34',
        'appium:platformVersion': '14',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/transport-partner-staging-0.26.0.apk'),
        "appium:autoGrantPermissions": true
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [
        ['appium', {
            args: {
                address: 'localhost',
                port: 4723,
                relaxedSecurity: true
            },
            logPath: './'
        }]
    ],

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
