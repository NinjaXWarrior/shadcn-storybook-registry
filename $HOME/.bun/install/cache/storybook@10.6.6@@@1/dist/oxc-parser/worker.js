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
  oxcParse
} from "../_node-chunks/chunk-XYXFYDZG.js";
import "../_node-chunks/chunk-W5MOAE42.js";
import "../_node-chunks/chunk-EWYGD7IV.js";
import "../_node-chunks/chunk-WSAKS64S.js";
import "../_node-chunks/chunk-LBUXDT45.js";

// src/oxc-parser/worker.ts
import { parentPort } from "node:worker_threads";
if (!parentPort)
  throw new Error("oxc-parser worker must be run as a worker thread");
var port = parentPort;
port.on("message", async (msg) => {
  try {
    let edges = await oxcParse(msg.filePath, msg.source), response = { id: msg.id, ok: !0, edges };
    port.postMessage(response);
  } catch (error) {
    let err = error, response = {
      id: msg.id,
      ok: !1,
      message: err?.message ?? String(error),
      name: err?.name ?? "Error"
    };
    port.postMessage(response);
  }
});
