async function c3(page, { p1, p2, p3 } = {}) {
    p1 = "one";
    p2 = "two";
    p3 = "three";
  
    await page.click('#user-name');
}

module.exports = { c3 };