import CJS_COMPAT_NODE_URL_xcnf8pgum1 from 'node:url';
import CJS_COMPAT_NODE_PATH_xcnf8pgum1 from 'node:path';
import CJS_COMPAT_NODE_MODULE_xcnf8pgum1 from "node:module";

var __filename = CJS_COMPAT_NODE_URL_xcnf8pgum1.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_xcnf8pgum1.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_xcnf8pgum1.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------

// ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = process.env.NODE_ENV === "production", prefix = "Invariant failed";
function invariant(condition, message) {
  if (!condition) {
    if (isProduction)
      throw new Error(prefix);
    var provided = typeof message == "function" ? message() : message, value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
  }
}

export {
  invariant
};
