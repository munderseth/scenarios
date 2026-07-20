async function c2(page, { p2, p3, p4} = {}) {
    p2 = "one";
  
    await page.click('#user-name');
}

module.exports = { c2 };