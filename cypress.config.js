const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  env: {
    urlAngular: "https://rahulshettyacademy.com/angularpractice/"
  },
  retries: {
    runMode: 1
  },
  projectId: 'tr7a8z',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    
    specPattern: './cypress/integration/*/*.feature',
  },
  
 
});
