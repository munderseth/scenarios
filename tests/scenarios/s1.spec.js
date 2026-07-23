// ===== STARTING POINT: tests/scenarios/s1.spec.js =====
/**
 * Scenario: s1
 * Description: now lets see if this works
 *
 * Cases:
 *  - c1 case (3 steps)
 *    1. Navigate to https://example.com
 *    2. Navigate to https://example.com
 *    3. Navigate to https://example.com
 */
const { test, expect } = require('@playwright/test');

test.describe("s1", () => {
  test.describe.configure({ mode: 'serial' });
  let v1; // scenario variable

  test('c1', async ({ page }) => {
    // Step 1: Navigate to https://example.com
    // Step 2: Navigate to https://example.com
    // Step 3: Navigate to https://example.com
  });  
});        