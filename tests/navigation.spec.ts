import { test, expect } from '@playwright/test'

test.describe('Nawigacja – desktop', () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('desktop nav jest widoczny', async ({ page }) => {
    const nav = page.locator('nav[aria-label="Nawigacja główna"]')
    await expect(nav).toBeVisible()
  })

  test('desktop nav zawiera 4 linki', async ({ page }) => {
    const nav = page.locator('nav[aria-label="Nawigacja główna"]')
    const buttons = nav.locator('button')
    await expect(buttons).toHaveCount(4)
  })

  test('desktop nav zawiera wszystkie sekcje', async ({ page }) => {
    const nav = page.locator('nav[aria-label="Nawigacja główna"]')
    await expect(nav).toContainText('Czym jest Digitalizacja')
    await expect(nav).toContainText('Obszary Digitalizacji')
    await expect(nav).toContainText('O nas')
    await expect(nav).toContainText('Kontakt')
  })

  test('klik "Kontakt" przewija do sekcji #kontakt', async ({ page }) => {
    await page.locator('[data-testid="nav-kontakt"]').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('#kontakt')).toBeInViewport({ ratio: 0.2 })
  })

  test('klik "O nas" przewija do sekcji #o-nas', async ({ page }) => {
    await page.locator('[data-testid="nav-o-nas"]').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('#o-nas')).toBeInViewport({ ratio: 0.2 })
  })

  test('nav zmienia styl po przewinięciu', async ({ page }) => {
    const navInner = page.locator('[data-testid="nav-inner"]')

    // Na górze – przezroczyste tło
    await expect(navInner).toHaveClass(/bg-white\/40/)

    // Po przewinięciu
    await page.evaluate(() => window.scrollTo({ top: 500, behavior: 'instant' }))
    await page.waitForTimeout(300)
    await expect(navInner).toHaveClass(/bg-white\/90/)
  })

  test('mobilne menu nie jest widoczne na desktop', async ({ page }) => {
    const toggle = page.locator('[data-testid="mobile-menu-toggle"]')
    await expect(toggle).toBeHidden()
  })
})

test.describe('Nawigacja – mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('desktop nav jest ukryty na mobile', async ({ page }) => {
    await expect(page.locator('nav[aria-label="Nawigacja główna"]')).toBeHidden()
  })

  test('hamburger jest widoczny na mobile', async ({ page }) => {
    await expect(page.locator('[data-testid="mobile-menu-toggle"]')).toBeVisible()
  })

  test('hamburger ma aria-label', async ({ page }) => {
    const toggle = page.locator('[data-testid="mobile-menu-toggle"]')
    await expect(toggle).toHaveAttribute('aria-label', 'Otwórz menu')
  })

  test('klik hamburgera otwiera menu', async ({ page }) => {
    const toggle = page.locator('[data-testid="mobile-menu-toggle"]')
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeHidden()
    await toggle.click()
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible()
  })

  test('mobilne menu zawiera wszystkie opcje nawigacji', async ({ page }) => {
    await page.locator('[data-testid="mobile-menu-toggle"]').click()
    const menu = page.locator('[data-testid="mobile-menu"]')
    await expect(menu).toContainText('Czym jest Digitalizacja')
    await expect(menu).toContainText('Obszary Digitalizacji')
    await expect(menu).toContainText('O nas')
    await expect(menu).toContainText('Kontakt')
  })

  test('menu mobilne zamyka się po kliknięciu opcji', async ({ page }) => {
    await page.locator('[data-testid="mobile-menu-toggle"]').click()
    const menu = page.locator('[data-testid="mobile-menu"]')
    await expect(menu).toBeVisible()
    await menu.locator('button').first().click()
    await page.waitForTimeout(400)
    await expect(menu).toBeHidden()
  })
})
