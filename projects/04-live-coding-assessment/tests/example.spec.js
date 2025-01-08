// @ts-check
import { test, expect } from '@playwright/test'

const CAT_ENDPOINT_PREFIX = 'https://cataas.com/cat'
const LOCALHOST_URL = 'http://localhost:5173/'

test('App shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const factParagraph = page.locator('p', { hasText: 'Loading curious fact...' })
  const image = await page.getByRole('img')

  const textContent = await factParagraph.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_ENDPOINT_PREFIX)).toBeTruthy()
})
