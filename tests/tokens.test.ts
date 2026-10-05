import { describe, expect, it } from 'vitest';
import { darkColors, lightColors } from '../src/tokens';

const HEX = /^#[0-9A-Fa-f]{6}$/;

describe('brand color tokens', () => {
  it('light and dark palettes expose the same keys', () => {
    expect(Object.keys(darkColors).sort()).toEqual(Object.keys(lightColors).sort());
  });

  it('every token is a 6-digit hex color', () => {
    for (const [name, value] of [...Object.entries(lightColors), ...Object.entries(darkColors)]) {
      expect(value, `token ${name}`).toMatch(HEX);
    }
  });
});
