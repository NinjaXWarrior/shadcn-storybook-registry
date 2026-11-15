import CJS_COMPAT_NODE_URL_xcnf8pgum1 from 'node:url';
import CJS_COMPAT_NODE_PATH_xcnf8pgum1 from 'node:path';
import CJS_COMPAT_NODE_MODULE_xcnf8pgum1 from "node:module";

var __filename = CJS_COMPAT_NODE_URL_xcnf8pgum1.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_xcnf8pgum1.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_xcnf8pgum1.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------
import {
  toCliMethodName
} from "./chunk-IODMIMIF.js";

// src/shared/open-service/toolset-definition.ts
function resolveToolsetDescription(description, context) {
  return typeof description == "function" ? description(context) : description;
}
async function invokeToolsetMethod(toolset, methodName, input, context) {
  let { telemetry, ...outcome } = await toolset.methods[methodName].handler(input, context);
  return telemetry ? {
    ...outcome,
    telemetry: {
      ...telemetry,
      toolset: toolset.id,
      tool: toCliMethodName(methodName),
      event: `tool:${toolset.id}_${methodName}`
    }
  } : outcome;
}

export {
  resolveToolsetDescription,
  invokeToolsetMethod
};
