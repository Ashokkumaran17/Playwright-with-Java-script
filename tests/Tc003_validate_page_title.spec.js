//require is a builtin Nodejs func that is used include module.
const { test, expect } = require('@playwright/test');

//javascript is a asynchronous.
test('Login to the App', async ({ page }) => {
    //Open the the URL
    await page.goto('http://www.automationpractice.pl/index.php')
    // click Sign In
    await page.locator("a[class=\"login\"]").click()
    //Enter the user name Field
    await page.locator("#email").fill("selenium_java_2023@yopmail.com")
    // Enter the Password Field
    await page.locator("#passwd").fill("Java2023")
    // Click the Submit button
    await page.locator("#SubmitLogin").click()

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("My account - My Shop")

    //Click SignOut Button
    await page.locator("a[class=\"logout\"]").click()
});



