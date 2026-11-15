import CJS_COMPAT_NODE_URL_3ykvwg1pt11 from 'node:url';
import CJS_COMPAT_NODE_PATH_3ykvwg1pt11 from 'node:path';
import CJS_COMPAT_NODE_MODULE_3ykvwg1pt11 from "node:module";

var __filename = CJS_COMPAT_NODE_URL_3ykvwg1pt11.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_3ykvwg1pt11.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_3ykvwg1pt11.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------
import {
  require_picocolors
} from "./chunk-E6PKV66O.js";
import {
  ADDON_ID2 as ADDON_ID
} from "./chunk-KLEAYBM3.js";
import {
  __toESM
} from "./chunk-MOBZ6BD7.js";

// src/logger.ts
var import_picocolors = __toESM(require_picocolors(), 1);
import { logger } from "storybook/internal/node-logger";
var log = (message) => {
  logger.log(
    `${import_picocolors.default.magenta(ADDON_ID)}: ${message.toString().replaceAll(/(│\n|│  )/g, "").trim()}`
  );
};

// src/utils.ts
function errorToErrorLike(error) {
  return {
    message: error.message,
    name: error.name,
    // avoid duplicating the error message in the stack trace
    stack: error.message + " " + error.stack?.replace(error.message, ""),
    cause: error.cause && error.cause instanceof Error ? errorToErrorLike(error.cause) : void 0
  };
}

// ../../../node_modules/es-toolkit/dist/function/noop.mjs
function noop() {
}

export {
  log,
  errorToErrorLike,
  noop
};
