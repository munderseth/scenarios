async function c3(page, { p3} = {}) {
    p3 = "one";
  
    await page.click('#user-name');
}

module.exports = { c3 };