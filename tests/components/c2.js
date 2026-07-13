async function c2(page, { in1, in2 } = {}) {
   await page.click('#user-name');
}

module.exports = { c2 };