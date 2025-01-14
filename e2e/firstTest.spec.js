describe('Example', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    it('should have welcome screen', async () => {
      await expect(element(by.id('welcome'))).toBeVisible();
    });
  
    it('should show hello screen after tap', async () => {
      await element(by.id('clickMeButton')).tap();
    });
  });
  