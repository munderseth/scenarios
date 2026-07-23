// ===== STARTING POINT: tests/components/c1.js =====

/**
 * Component: c1
 * Description: lets make changes. Stuff and more, now will work
 *
 * Steps:
 *   1. Navigate to https://example.com
 */
async function c1(page, { p1, p2, p3, CHANGE1 = "\"WHAT IS GOING ON\"" } = {}) {
  if (p1 == null) throw new Error("Required input 'p1' is not set");

  // Step 1: Navigate to https://example.com
}      
       
module.exports = { c1 };