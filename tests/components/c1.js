async function c1(page, { p1, p2, m1, x1, c1, c2 } = {}) {
    p1 = "one";
    p2 = "two";
    m1 = "m1";
    x1 = "x1"
    c1 = "c1";
    c2 = "c2";
    await page.click('#user-name');
}

module.exports = { c1 };