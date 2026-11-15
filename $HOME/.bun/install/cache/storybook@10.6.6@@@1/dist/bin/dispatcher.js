#!/usr/bin/env node
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
  MIN_SUPPORTED_NODE_DESCRIPTION,
  isNodeVersionSupported,
  versions_default
} from "../_node-chunks/chunk-HRXZ46OF.js";
import {
  resolvePackageDir
} from "../_node-chunks/chunk-LIC6G4BL.js";
import "../_node-chunks/chunk-54UW2TOW.js";
import {
  require_dist
} from "../_node-chunks/chunk-EWYGD7IV.js";
import {
  join
} from "../_node-chunks/chunk-Y3HDBRQK.js";
import {
  __toESM
} from "../_node-chunks/chunk-LBUXDT45.js";

// src/bin/dispatcher.ts
import Module from "node:module";
import { pathToFileURL } from "node:url";
import { logger } from "storybook/internal/node-logger";
var import_ts_dedent = __toESM(require_dist(), 1);
var [major, minor, patch] = process.versions.node.split(".").map(Number);
isNodeVersionSupported(major, minor, patch) || (logger.error(
  import_ts_dedent.dedent`To run Storybook, you need Node.js version ${MIN_SUPPORTED_NODE_DESCRIPTION}.
    You are currently running Node.js ${process.version}. Please upgrade your Node.js installation.`
), process.exit(1));
async function run() {
  try {
    Module.enableCompileCache?.();
  } catch {
  }
  let args = process.argv.slice(2);
  if ((args[0] === "ai" || args[0] === "tools" && !args.includes("--no-attach")) && (process.env.STORYBOOK_ATTACHED_TOOLS = "true"), ["dev", "build", "index", "ai", "tools", "skills"].includes(args[0])) {
    await import(pathToFileURL(join(resolvePackageDir("storybook"), "dist/bin/core.js")).href);
    return;
  }
  let { JsPackageManagerFactory, executeNodeCommand, getRemotePackageRunnerArgs } = await import("storybook/internal/common"), targetCli = args[0] === "init" ? {
    pkg: "create-storybook",
    args: args.slice(1)
  } : {
    pkg: "@storybook/cli",
    args
  };
  try {
    let { default: targetCliPackageJson } = await import(`${targetCli.pkg}/package.json`, {
      with: { type: "json" }
    });
    if (targetCliPackageJson.version === versions_default[targetCli.pkg]) {
      executeNodeCommand({
        scriptPath: join(resolvePackageDir(targetCli.pkg), "dist/bin/index.js"),
        args: targetCli.args,
        options: {
          stdio: "inherit"
        }
      }).on("exit", (code) => {
        process.exit(code ?? 1);
      });
      return;
    }
  } catch {
  }
  let packageManager = JsPackageManagerFactory.getPackageManager();
  packageManager.runPackageCommand({
    args: getRemotePackageRunnerArgs(
      packageManager.type,
      targetCli.pkg,
      versions_default[targetCli.pkg],
      targetCli.args
    ),
    useRemotePkg: !0,
    stdio: "inherit"
  }).on("exit", (code) => {
    process.exit(code ?? 1);
  });
}
run();
