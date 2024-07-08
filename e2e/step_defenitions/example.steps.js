const { Given, Then } = require('@cucumber/cucumber');

Given('I launch the app', async () => {
  await device.launchApp();
});

Then('I should see {string} text', async (text) => {
  await expect(element(by.text(text))).toBeVisible();
});
