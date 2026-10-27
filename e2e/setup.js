const { expect: jestExpect } = require('@jest/globals');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

// Detox replaces the global `expect`, so the matcher is registered on Jest's own expect
jestExpect.extend({ toMatchImageSnapshot });
