import { test, expect } from '@playwright/test'

test.describe('Sekcje strony – widoczność i treść', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('sekcja "Czym jest Digitalizacja360" istnieje i ma treść', async ({ page }) => {
    const section = page.locator('[data-testid="section-what"]')
    await expect(section).toBeAttached()
    await section.scrollIntoViewIfNeeded()
    await expect(section).toContainText('Czym jest Digitalizacja')
  })

  test('sekcja "Czym jest" zawiera listę 7 punktów', async ({ page }) => {
    const section = page.locator('[data-testid="section-what"]')
    await section.scrollIntoViewIfNeeded()
    const items = section.locator('li')
    await expect(items).toHaveCount(7)
  })

  test('sekcja "Dlaczego warto" zawiera 3 karty', async ({ page }) => {
    const section = page.locator('[data-testid="section-why"]')
    await section.scrollIntoViewIfNeeded()
    const cards = section.locator('.card-hover')
    await expect(cards).toHaveCount(3)
  })

  test('sekcja "Dlaczego warto" ma wszystkie benefity', async ({ page }) => {
    const section = page.locator('[data-testid="section-why"]')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toContainText('Zyskaj czas')
    await expect(section).toContainText('Podnieś wydajność')
    await expect(section).toContainText('Kontroluj firmę')
  })

  test('sekcja "Obszary" zawiera 6 kart', async ({ page }) => {
    const section = page.locator('[data-testid="section-areas"]')
    await section.scrollIntoViewIfNeeded()
    const cards = section.locator('.card-hover')
    await expect(cards).toHaveCount(6)
  })

  test('sekcja "Obszary" zawiera wszystkie 6 obszarów', async ({ page }) => {
    const section = page.locator('[data-testid="section-areas"]')
    await section.scrollIntoViewIfNeeded()
    for (const text of [
      'Marketing i pozyskiwanie leadów',
      'Sprzedaż i obsługa klienta',
      'Systemy dedykowane',
      'Sklepy internetowe',
      'Outsourcing IT',
      'Nowe technologie i AI',
    ]) {
      await expect(section).toContainText(text)
    }
  })

  test('sekcja "Rekomendacje" jest widoczna', async ({ page }) => {
    const section = page.locator('[data-testid="section-recommendations"]')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toContainText('Rekomendacje')
    await expect(section).toContainText('jasny plan działania')
  })

  test('sekcja "Praca w etapach" jest widoczna', async ({ page }) => {
    const section = page.locator('[data-testid="section-stages"]')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toContainText('Praca w etapach')
    await expect(section).toContainText('oszczędność finansowa')
  })

  test('sekcja "Finansowanie" zawiera 3 karty', async ({ page }) => {
    const section = page.locator('[data-testid="section-funding"]')
    await section.scrollIntoViewIfNeeded()
    const cards = section.locator('.card-hover')
    await expect(cards).toHaveCount(3)
  })

  test('sekcja "O nas" zawiera dwóch ekspertów', async ({ page }) => {
    const section = page.locator('[data-testid="section-team"]')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toContainText('Kamil Kaczmarczyk')
    await expect(section).toContainText('Sebastian Barnaś')
  })

  test('sekcja "O nas" zawiera zdjęcia obu ekspertów', async ({ page }) => {
    const section = page.locator('[data-testid="section-team"]')
    await section.scrollIntoViewIfNeeded()
    const images = section.locator('img')
    const count = await images.count()
    expect(count).toBeGreaterThanOrEqual(2)
  })

  test('sekcja "Warsztat" zawiera cennik', async ({ page }) => {
    const section = page.locator('[data-testid="section-workshop"]')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toContainText('12 000')
    await expect(section).toContainText('24 000 PLN')
  })

  test('sekcja "Warsztat" zawiera formy realizacji', async ({ page }) => {
    const section = page.locator('[data-testid="section-workshop"]')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toContainText('stacjonarnie')
    await expect(section).toContainText('online')
  })

  test('stopka zawiera dane kontaktowe', async ({ page }) => {
    const footer = page.locator('footer')
    await footer.scrollIntoViewIfNeeded()
    await expect(footer).toContainText('+48 508 786 884')
    await expect(footer).toContainText('+48 516 052 772')
    await expect(footer).toContainText('k.kaczmarczyk@k-development.pl')
    await expect(footer).toContainText('biuro@technopartner.pl')
  })

  test('stopka zawiera listę partnerów', async ({ page }) => {
    const footer = page.locator('footer')
    await footer.scrollIntoViewIfNeeded()
    await expect(footer).toContainText('K-development')
    await expect(footer).toContainText('Technopartner')
    await expect(footer).toContainText('AGH')
  })
})
