async function c1(page, { p2, p3} = {}) {
    p2 = "one";
  
    await page.click('#user-name');
}

module.exports = { c2 };