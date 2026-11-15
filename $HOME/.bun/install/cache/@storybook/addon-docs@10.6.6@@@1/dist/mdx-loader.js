import CJS_COMPAT_NODE_URL_jgew7po38zj from 'node:url';
import CJS_COMPAT_NODE_PATH_jgew7po38zj from 'node:path';
import CJS_COMPAT_NODE_MODULE_jgew7po38zj from "node:module";

var __filename = CJS_COMPAT_NODE_URL_jgew7po38zj.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_jgew7po38zj.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_jgew7po38zj.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------
import {
  compile
} from "./_node-chunks/chunk-MWEAVXJM.js";
import "./_node-chunks/chunk-2MYMLEZ6.js";
import "./_node-chunks/chunk-R4UF434C.js";
import "./_node-chunks/chunk-WGRKW5I6.js";

// src/mdx-loader.ts
var DEFAULT_RENDERER = `
import React from 'react';
`;
async function loader(content) {
  let callback = this.async(), options = { ...this.getOptions(), filepath: this.resourcePath };
  try {
    let result = await compile(content, options), code = `${DEFAULT_RENDERER}
${result}`;
    return callback(null, code);
  } catch (err) {
    return console.error("Error loading:", this.resourcePath), callback(err);
  }
}
var mdx_loader_default = loader;
export {
  mdx_loader_default as default
};
