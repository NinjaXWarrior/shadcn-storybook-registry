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
  resolveStorybookConfigDir
} from "./chunk-THJDR7JJ.js";
import {
  ToolsRuntimeError,
  projectPathsEqual
} from "./chunk-MGZ3QCPI.js";
import {
  clearToolsetRegistry,
  getRegisteredToolsets
} from "./chunk-CFUXNBOL.js";
import "./chunk-IODMIMIF.js";
import {
  clearRegistry
} from "./chunk-57FGMYZ7.js";
import "./chunk-5YUDX4MH.js";
import "./chunk-7YSK43JI.js";
import "./chunk-W5MOAE42.js";
import "./chunk-EWYGD7IV.js";
import "./chunk-WSAKS64S.js";
import "./chunk-LBUXDT45.js";

// src/cli/tools/sdk/local-runtime.ts
import { resolve } from "node:path";
import {
  ChangeDetectionService,
  experimental_getStatusStore,
  experimental_loadStorybook,
  experimental_resetChangeDetectionReadiness,
  experimental_resetServicesPresetOnce,
  experimental_setChangeDetectionHost,
  getService,
  prepareHeadlessUniversalStores
} from "storybook/internal/core-server";
import { CHANGE_DETECTION_STATUS_TYPE_ID } from "storybook/internal/types";
async function bootstrapToolsRuntime(target, deps = {}) {
  let cwd = resolve(target.cwd ?? process.cwd());
  if (!projectPathsEqual(cwd, process.cwd()))
    throw new ToolsRuntimeError({
      reason: "mode-unavailable",
      message: `Local tools bootstrap requires process.cwd() to be the target project (${cwd}), not ${process.cwd()}.`
    });
  let configDir = resolveStorybookConfigDir({ cwd, configDir: target.configDir }), channel = prepareHeadlessUniversalStores(), options = await experimental_loadStorybook({ configDir, channel }), setChangeDetectionHost = deps.setChangeDetectionHost ?? experimental_setChangeDetectionHost;
  setChangeDetectionHost(() => startChangeDetectionInProcess(options));
  let closed = !1, close = async () => {
    closed || (closed = !0, clearRegistry(), clearToolsetRegistry(), experimental_resetServicesPresetOnce(), setChangeDetectionHost(void 0), experimental_resetChangeDetectionReadiness());
  };
  return {
    configDir,
    toolsets: getRegisteredToolsets(),
    getService: (serviceId, serviceOptions) => getService(serviceId, serviceOptions),
    close
  };
}
async function startChangeDetectionInProcess(options) {
  let changeDetectionService = new ChangeDetectionService({
    storyIndexGeneratorPromise: options.presets.apply("storyIndexGenerator"),
    statusStore: experimental_getStatusStore(CHANGE_DETECTION_STATUS_TYPE_ID),
    workingDir: process.cwd()
  }), features = await options.presets.apply("features");
  changeDetectionService.start(features?.changeDetection !== !1);
}
export {
  bootstrapToolsRuntime
};
