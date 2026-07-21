async function c3x(page, { p1} = {}) {
    p1 = "one";
  
    await page.click('#user-name');
}

module.exports = { c3x };