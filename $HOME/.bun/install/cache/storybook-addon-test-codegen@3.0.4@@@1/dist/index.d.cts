import * as storybook_internal_csf from 'storybook/internal/csf';
import { AddonTypes } from 'storybook/internal/csf';

interface AddonCodegenTypes extends AddonTypes {
}

declare const _default: () => storybook_internal_csf.PreviewAddon<AddonCodegenTypes>;

export { _default as default };
