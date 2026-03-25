import { test, expect } from '@playwright/test'

test.describe('Strona główna – podstawowe elementy', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('ma poprawny tytuł strony', async ({ page }) => {
    await expect(page).toHaveTitle(/Digitalizacja360/)
  })

  test('ma meta description', async ({ page }) => {
    const description = page.locator('meta[name="description"]')
    await expect(description).toHaveAttribute('content', /transformacja cyfrowa/i)
  })

  test('html ma atrybut lang="pl"', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'pl')
  })

  test('logo jest widoczne', async ({ page }) => {
    const logo = page.locator('img[alt="Digitalizacja360"]').first()
    await expect(logo).toBeVisible()
  })

  test('h1 zawiera "Digitalizacja" i "360"', async ({ page }) => {
    const h1 = page.locator('h1')
    await expect(h1).toContainText('Digitalizacja')
    await expect(h1).toContainText('360')
  })

  test('podtytuł hero jest widoczny', async ({ page }) => {
    await expect(page.getByText('Zbuduj przyszłość firmy')).toBeVisible()
  })

  test('zdjęcie laptopa w hero jest widoczne', async ({ page }) => {
    const img = page.locator('[data-testid="section-hero"] img').first()
    await expect(img).toBeVisible()
  })

  test('przycisk CTA jest widoczny', async ({ page }) => {
    const cta = page.getByRole('button', { name: /Skontaktuj się/i }).first()
    await expect(cta).toBeVisible()
  })

  test('stopka jest obecna w DOM', async ({ page }) => {
    await expect(page.locator('footer')).toBeAttached()
  })
})
