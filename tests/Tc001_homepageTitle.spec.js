//require is a builtin Nodejs func that is used include module.
const { test, expect } = require('@playwright/test');
//javascript is a asynchronous
test('has title', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("My Shop");
});
