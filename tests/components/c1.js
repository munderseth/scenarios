async function c1(page, { p1, p2, p3} = {}) {
    p1 = "one";
  
    await page.click('#user-name');
}

module.exports = { c1 };