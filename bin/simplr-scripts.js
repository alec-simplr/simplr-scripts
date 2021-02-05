#!/usr/bin/env node

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", (err) => {
  throw err;
});

const availableScripts = ["start", "test", "build"];
const args = process.argv.slice(2);
const script = args[0];

// break if unknown script
if (!availableScripts.includes(script)) {
  console.error(`Unknown script ${script}.`);
  process.exit();
}

try {
  require("../scripts/" + script)();
} catch (err) {
  console.error(`Error running script "${script}":\n`, err);
}
