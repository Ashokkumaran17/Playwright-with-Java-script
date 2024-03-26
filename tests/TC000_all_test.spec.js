import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });
let page;
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
});
test('Login and logout the app', async () => {
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
test('validate women tab image count', async ({ page }) => {
    //Open the the URL
    await page.goto('http://www.automationpractice.pl/index.php')
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("My Shop")
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

    //Validate the Women tab Count
    // click the women tab
    await page.locator("//*[@id='block_top_menu']/ul/li[1]/a").click()
    // display the No of image count
    await expect(page.locator('#center_column > ul > li')).toHaveCount(7)


    //Click SignOut Button
    await page.locator("a[class=\"logout\"]").click()

});

test('validate Dresses tab image count', async ({ page }) => {
    //Open the the URL
    await page.goto('http://www.automationpractice.pl/index.php')
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("My Shop")
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

    //Validate the Women tab Count
    // click the women tab
    await page.locator("//*[@id='block_top_menu']/ul/li[2]/a").click()
    // display the No of image count
    await expect(page.locator('#center_column > ul > li')).toHaveCount(5)


    //Click SignOut Button
    await page.locator("a[class=\"logout\"]").click()

});
test('validate TShirts tab image count', async ({ page }) => {
    //Open the the URL
    await page.goto('http://www.automationpractice.pl/index.php')
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("My Shop")
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

    //Validate the Women tab Count
    // click the women tab
    await page.locator("//*[@id='block_top_menu']/ul/li[3]/a").click()
    // display the No of image count
    await expect(page.locator('#center_column > ul > li')).toHaveCount(1)


    //Click SignOut Button
    await page.locator("a[class=\"logout\"]").click()

});
test('validate Casual Dresses image count', async ({ page }) => {
    //Open the the URL
    await page.goto('http://www.automationpractice.pl/index.php')
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("My Shop")
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

    //Validate the Women tab Count
    // click the women tab
    //await page.locator("//*[@id='block_top_menu']/ul/li[2]/a").click()
    await page.locator("//*[@id='block_top_menu']/ul/li[2]/a").hover()
    //click the casual dress
    await page.locator("//*[@id=\"block_top_menu\"]/ul/li[2]/ul/li[1]/a").click()
    // display the No of image count
    await expect(page.locator('#center_column > ul > li')).toHaveCount(1)


    //Click SignOut Button
    await page.locator("a[class=\"logout\"]").click()

});

test('validate Evening Dresses image count', async ({ page }) => {
    //Open the the URL
    await page.goto('http://www.automationpractice.pl/index.php')
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("My Shop")
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

    //Validate the Women tab Count
    // click the women tab
    //await page.locator("//*[@id='block_top_menu']/ul/li[2]/a").click()
    await page.locator("//*[@id='block_top_menu']/ul/li[2]/a").hover()
    //click the casual dress
    await page.locator("//*[@id=\"block_top_menu\"]/ul/li[2]/ul/li[2]/a").click()
    // display the No of image count
    await expect(page.locator('#center_column > ul > li')).toHaveCount(1)


    //Click SignOut Button
    await page.locator("a[class=\"logout\"]").click()

});
test('validate Summer Dresses image count', async ({ page }) => {
    //Open the the URL
    await page.goto('http://www.automationpractice.pl/index.php')
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("My Shop")
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

    //Validate the Women tab Count
    // click the women tab
    //await page.locator("//*[@id='block_top_menu']/ul/li[2]/a").click()
    await page.locator("//*[@id='block_top_menu']/ul/li[2]/a").hover()
    //click the casual dress
    await page.locator("//*[@id=\"block_top_menu\"]/ul/li[2]/ul/li[3]/a").click()
    // display the No of image count
    await expect(page.locator('#center_column > ul > li')).toHaveCount(3)


    //Click SignOut Button
    await page.locator("a[class=\"logout\"]").click()

});