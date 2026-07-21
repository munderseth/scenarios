// ===== STARTING POINT: tests/components/r2.js =====

/**
 * Component: r2
 * Description: second example
 *
 * Steps:
 *   1. Navigate to https://example.com
 */
async function r2(page, { in1, in2, in3 = "\"WHAT IS THIS\"" } = {}) {
  if (in1 == null) throw new Error("Required input 'in1' is not set");
  if (in2 == null) throw new Error("Required input 'in2' is not set");

  // Step 1: Navigate to https://example.com
}

module.exports = { r2 };