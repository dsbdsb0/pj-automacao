const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://practice.automationtesting.in/my-account/",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
