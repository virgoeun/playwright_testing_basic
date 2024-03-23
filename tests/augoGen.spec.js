import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.pause();

  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.locator('h4')).toContainText('Welcome to the Secure Area. When you are done click logout below.');
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});