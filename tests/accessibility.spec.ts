import { test, expect } from '@playwright/test'

test.describe('Dostępność', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('wszystkie obrazy mają atrybut alt', async ({ page }) => {
    const imgsWithoutAlt = await page.evaluate(() =>
      Array.from(document.querySelectorAll('img'))
        .filter(img => !img.getAttribute('alt'))
        .map(img => img.src)
    )
    expect(imgsWithoutAlt).toHaveLength(0)
  })

  test('wszystkie przyciski mają etykietę', async ({ page }) => {
    const buttonsWithoutLabel = await page.evaluate(() =>
      Array.from(document.querySelectorAll('button'))
        .filter(btn => !btn.textContent?.trim() && !btn.getAttribute('aria-label'))
        .length
    )
    expect(buttonsWithoutLabel).toBe(0)
  })

  test('kotwice nawigacyjne istnieją w DOM', async ({ page }) => {
    await expect(page.locator('#kontakt')).toBeAttached()
    await expect(page.locator('#o-nas')).toBeAttached()
    await expect(page.locator('#czym-jest')).toBeAttached()
    await expect(page.locator('#obszary')).toBeAttached()
  })

  test('linki email w stopce mają href="mailto:"', async ({ page }) => {
    const emailLinks = page.locator('footer a[href^="mailto:"]')
    await expect(emailLinks).toHaveCount(2)
  })

  test('numery telefonów w stopce mają href="tel:"', async ({ page }) => {
    const telLinks = page.locator('footer a[href^="tel:"]')
    await expect(telLinks).toHaveCount(2)
  })
})

test.describe('Responsywność', () => {
  test('brak poziomego scrolla na mobile (390px)', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const overflow = await page.evaluate(() =>
      document.body.scrollWidth > window.innerWidth
    )
    expect(overflow).toBe(false)
  })

  test('brak poziomego scrolla na tablecie (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const overflow = await page.evaluate(() =>
      document.body.scrollWidth > window.innerWidth
    )
    expect(overflow).toBe(false)
  })

  test('brak poziomego scrolla na desktop (1440px)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const overflow = await page.evaluate(() =>
      document.body.scrollWidth > window.innerWidth
    )
    expect(overflow).toBe(false)
  })
})

test.describe('Animacje scroll reveal', () => {
  test('elementy .reveal mają klasę "visible" po przewinięciu do nich', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await page.locator('[data-testid="section-why"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(900)

    const visibleCount = await page.evaluate(() =>
      document.querySelectorAll('[data-testid="section-why"] .reveal.visible').length
    )
    expect(visibleCount).toBeGreaterThan(0)
  })
})
