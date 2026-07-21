// ===== STARTING POINT: tests/components/r1.js =====

/**
 * Component: r1
 * Description: next example with description
 *
 * Steps:
 *   1. Navigate to https://example.com
 */
async function r1(page, { p1 } = {}) {
  if (p1 == null) throw new Error("Required input 'p1' is not set");

  // Step 1: Navigate to https://example.com
}

module.exports = { r1 };