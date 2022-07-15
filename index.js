var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonDir: './cypress/cucumber-json/',
        output: './cucumber-html-reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        metadata: {
            "App Version":"1.0.0",
            "Test Environment": "STAGING",
            "Browser": "Chrome  103.0.5060.114",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Cypress": "v10.3.0"
        }
    };

    reporter.generate(options);