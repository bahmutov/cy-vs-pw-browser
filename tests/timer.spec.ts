import { test, expect } from '@playwright/test'

test.use({ baseURL: 'http://localhost:9090' })

test('counts seconds', async ({ page }) => {
  await page.goto('/')
  const timer = page.locator('#timer')
  await expect(timer).toHaveText('0')
  await expect(timer).toHaveText('1')
  await expect(timer).toHaveText('2')
  await expect(timer).toHaveText('3')
  await expect(timer).toHaveText('4')
  await expect(timer).toHaveText('5')
})
