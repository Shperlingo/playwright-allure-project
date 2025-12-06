import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
});

test('intentional failure', async ({ page }) => {
    await page.goto('https://example.com');
    // This expectation is designed to fail to show failure reporting
    expect(await page.title()).toBe('Wrong Title');
});
