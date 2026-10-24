import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
for (const width of [1440, 768, 390, 320]) {
  test(`layout and FAQ at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto('/');
    await expect(page.getByRole('heading',{level:1})).toBeVisible();
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty('complete',true);
      expect(await image.evaluate(el=>el.naturalWidth)).toBeGreaterThan(0);
    }
    expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    const question=page.locator('summary').first();
    await question.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('details').first()).toHaveAttribute('open','');
    await expect(page.getByText('必要ありません。友達はMinecraft Java版から接続できます。',{exact:false})).toBeVisible();
    await page.keyboard.press('Enter');
    await expect(page.locator('details').first()).not.toHaveAttribute('open','');
    await page.getByRole('link',{name:'使い方',exact:true}).click();
    await expect(page).toHaveURL(/#start$/);
    expect(errors).toEqual([]);
    await page.goto('/');
    await page.evaluate(()=>document.fonts.ready);
    await page.screenshot({path:`test-results/site-${width}.png`,fullPage:true});
  });
}
test('accessible structure, keyboard entry and download destination',async({page})=>{
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link',{name:'本文へ移動'})).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
  const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
  expect(results.violations).toEqual([]);
  for(const link of await page.getByRole('link',{name:'Windows版をダウンロード'}).all()) await expect(link).toHaveAttribute('href','https://github.com/g-kari/craftharbor/releases/download/v0.3.1-preview/setup.exe');
});
