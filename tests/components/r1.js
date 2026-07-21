// ===== STARTING POINT: tests/components/r1.js =====

/**
 * Component: r1
 * Description: next example with description
 *
 * Steps:
 *   1. Navigate to https://example.com
 *   2. Navigate to https://example.com
 */
async function r1(page, { p1, p2 = "\"TWO\"" } = {}) {
  if (p1 == null) throw new Error("Required input 'p1' is not set");

  // Variables — declare at function scope; assign in the step that generates the value
  let how = "\"ONE\""; // component variable

  // Step 1: Navigate to https://example.com
  // Step 2: Navigate to https://example.com
}

module.exports = { r1 };