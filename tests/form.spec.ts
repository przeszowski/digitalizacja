import { test, expect } from '@playwright/test'

test.describe('Formularz kontaktowy', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.locator('[data-testid="section-contact"]').scrollIntoViewIfNeeded()
  })

  test('formularz jest widoczny', async ({ page }) => {
    await expect(page.locator('[data-testid="contact-form"]')).toBeVisible()
  })

  test('wszystkie pola formularza są widoczne', async ({ page }) => {
    await expect(page.locator('[data-testid="input-name"]')).toBeVisible()
    await expect(page.locator('[data-testid="input-company"]')).toBeVisible()
    await expect(page.locator('[data-testid="input-email"]')).toBeVisible()
    await expect(page.locator('[data-testid="input-phone"]')).toBeVisible()
    await expect(page.locator('[data-testid="input-message"]')).toBeVisible()
    await expect(page.locator('[data-testid="submit-button"]')).toBeVisible()
  })

  test('pola mają poprawne atrybuty autocomplete', async ({ page }) => {
    await expect(page.locator('[data-testid="input-name"]')).toHaveAttribute('autocomplete', 'given-name')
    await expect(page.locator('[data-testid="input-email"]')).toHaveAttribute('autocomplete', 'email')
    await expect(page.locator('[data-testid="input-phone"]')).toHaveAttribute('autocomplete', 'tel')
  })

  test('pola mają atrybuty aria-label', async ({ page }) => {
    await expect(page.locator('[data-testid="input-name"]')).toHaveAttribute('aria-label', 'Imię')
    await expect(page.locator('[data-testid="input-email"]')).toHaveAttribute('aria-label', 'Adres email')
    await expect(page.locator('[data-testid="input-message"]')).toHaveAttribute('aria-label', 'Wiadomość')
  })

  test('submit bez danych pokazuje błąd walidacji', async ({ page }) => {
    await page.locator('[data-testid="submit-button"]').click()
    const error = page.locator('[data-testid="form-error"]')
    await expect(error).toBeVisible()
    await expect(error).toContainText('Wypełnij wymagane pola')
  })

  test('submit z imieniem ale bez emaila pokazuje błąd', async ({ page }) => {
    await page.locator('[data-testid="input-name"]').fill('Jan Kowalski')
    await page.locator('[data-testid="submit-button"]').click()
    await expect(page.locator('[data-testid="form-error"]')).toBeVisible()
  })

  test('submit bez imienia ale z emailem pokazuje błąd', async ({ page }) => {
    await page.locator('[data-testid="input-email"]').fill('jan@firma.pl')
    await page.locator('[data-testid="submit-button"]').click()
    await expect(page.locator('[data-testid="form-error"]')).toBeVisible()
  })

  test('można wpisać wartości we wszystkie pola', async ({ page }) => {
    await page.locator('[data-testid="input-name"]').fill('Anna Nowak')
    await page.locator('[data-testid="input-company"]').fill('Firma Sp. z o.o.')
    await page.locator('[data-testid="input-email"]').fill('anna@firma.pl')
    await page.locator('[data-testid="input-phone"]').fill('+48 600 123 456')
    await page.locator('[data-testid="input-message"]').fill('Prośba o kontakt.')

    await expect(page.locator('[data-testid="input-name"]')).toHaveValue('Anna Nowak')
    await expect(page.locator('[data-testid="input-company"]')).toHaveValue('Firma Sp. z o.o.')
    await expect(page.locator('[data-testid="input-email"]')).toHaveValue('anna@firma.pl')
    await expect(page.locator('[data-testid="input-phone"]')).toHaveValue('+48 600 123 456')
    await expect(page.locator('[data-testid="input-message"]')).toHaveValue('Prośba o kontakt.')
  })

  test('przycisk submit jest aktywny i ma poprawną etykietę', async ({ page }) => {
    const button = page.locator('[data-testid="submit-button"]')
    await expect(button).toBeEnabled()
    await expect(button).toContainText('Wyślij')
  })

  test('błąd walidacji ma role="alert"', async ({ page }) => {
    await page.locator('[data-testid="submit-button"]').click()
    const error = page.locator('[data-testid="form-error"]')
    await expect(error).toHaveAttribute('role', 'alert')
  })
})
