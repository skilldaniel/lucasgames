export * from './exports';

import { Integrations as CoreIntegrations } from '@sentry/core';

import { WINDOW } from './helpers';
import * as BrowserIntegrations from './integrations';

let windowIntegrations = {};

// This block is needed to add compatibility with the integrations packages when used with a CDN
if (WINDOW.Sentry && WINDOW.Sentry.Integrations) {
  windowIntegrations = WINDOW.Sentry.Integrations;
}

const INTEGRATIONS = {
  ...windowIntegrations,
  ...CoreIntegrations,
  ...BrowserIntegrations,
};

export { INTEGRATIONS as Integrations };

// DO NOT DELETE THESE COMMENTS!
// We want to exclude Replay from CDN bundles, so we remove the block below with our
// excludeReplay Rollup plugin when generating bundles. Everything between
// ROLLUP_EXCLUDE_FROM_BUNDLES_BEGIN and _END__ is removed for bundles.

// __ROLLUP_EXCLUDE_FROM_BUNDLES_BEGIN__
export { Replay } from '@sentry/replay';
// __ROLLUP_EXCLUDE_FROM_BUNDLES_END__
