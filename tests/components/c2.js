async function c2(page, { p1 = "P1"} = {}) {
    p1 = "one";
  
    await page.click('#user-name');
}  
 
module.exports = { c2 };