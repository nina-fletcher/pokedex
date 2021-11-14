import { formatPokemonId } from './index';

describe('formatPokemonId', () => {
  it('returns correct string for single digit ID', () => {
    expect(formatPokemonId(7)).toBe('#007');
  });

  it('returns correct string for double digit ID', () => {
    expect(formatPokemonId(77)).toBe('#077');
  });
});
