import {test, expect} from '@playwright/test';

test.describe('SauceDemo Login', () => {

    test('Valid Login', async ({page}) => { // Test case for valid login
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page).toHaveURL(/inventory.html/);
    });

    test('Invalid Login - wrong password', async ({page}) => { // Test case for invalid login
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'wrong_password');
        await page.click('#login-button');
        await expect(page.locator('.error-message-container')).toHaveText(/Username and password do not match/i);
    });

    test('Empty Credentials', async ({page}) => { // Test case for empty credentials
        await page.goto('https://www.saucedemo.com/');
        await page.click('#login-button');
        await expect(page.locator('.error-message-container')).toHaveText(/Username is required/i);
    });
});