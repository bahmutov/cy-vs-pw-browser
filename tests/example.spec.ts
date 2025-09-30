import { test, expect } from '@playwright/test'

test('playwright demo test', async ({ page }) => {
  await page.goto('/')
})
