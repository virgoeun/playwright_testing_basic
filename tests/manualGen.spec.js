import {test, expect} from '@playwright/test'

test.only("verify login feature", async ({page}) => {
await page.pause();
await page.goto("https://the-internet.herokuapp.com/login");
// await page.getByLabel('Username').click();
await page.locator("//input[@id='username']").click();
await page.getByLabel("Username").fill('tomsmith')
await page.getByLabel("Password").click();
await page.getByLabel("Password").fill("SuperSecretPassword!");
await expect(page.getByRole("button", {name:'Login'})).toBeVisible();
await page.getByRole("button", {type:'submit'}).click();

await expect(page.locator('h4.subheader')).toHaveText('Welcome to the Secure Area. When you are done click logout below.');
await expect(page.getByRole('link', {name:'Logout'})).toBeVisible();
})