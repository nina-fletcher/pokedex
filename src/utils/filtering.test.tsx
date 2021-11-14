import { filterPokemon, hasTypes, sortPokemon } from './filtering';
import { Pokemon } from '../graphql/generated/config';

const bulbasaur: Pokemon = {
  name: 'bulbasaur',
  id: 1,
  types: [
    {
      name: 'Grass',
    },
    {
      name: 'Poison',
    },
  ],
};

const charmander: Pokemon = {
  name: 'charmander',
  id: 4,
  types: [
    {
      name: 'Fire',
    },
  ],
};

const squirtle: Pokemon = {
  name: 'squirtle',
  id: 7,
  types: [
    {
      name: 'Water',
    },
  ],
};

describe('hasTypes', () => {
  it('returns true when pokemon has same type', () => {
    expect(hasTypes(charmander, ['Fire'])).toBeTruthy();
  });

  it('returns false when pokemon does not have same type', () => {
    expect(hasTypes(charmander, ['Water'])).toBeFalsy();
  });

  it('returns true when pokemon has both types matching', () => {
    expect(hasTypes(bulbasaur, ['Grass', 'Poison'])).toBeTruthy();
  });

  it('returns false with second unmatching type', () => {
    expect(hasTypes(bulbasaur, ['Grass', 'Water'])).toBeFalsy();
  });
});

describe('sortPokemon', () => {
  const pokemon: Pokemon[] = [bulbasaur, charmander, squirtle];

  describe('can sort by id', () => {
    it('ascending', () => {
      expect(sortPokemon(pokemon, 'id-asc')).toEqual([
        bulbasaur,
        charmander,
        squirtle,
      ]);
    });

    it('descending', () => {
      expect(sortPokemon(pokemon, 'id-desc')).toEqual([
        squirtle,
        charmander,
        bulbasaur,
      ]);
    });
  });

  describe('can sort by name', () => {
    it('ascending', () => {
      expect(sortPokemon(pokemon, 'name-asc')).toEqual([
        bulbasaur,
        charmander,
        squirtle,
      ]);
    });

    it('descending', () => {
      expect(sortPokemon(pokemon, 'name-desc')).toEqual([
        squirtle,
        charmander,
        bulbasaur,
      ]);
    });
  });

  describe('can sort by type', () => {
    it('ascending', () => {
      expect(sortPokemon(pokemon, 'type-asc')).toEqual([
        charmander,
        bulbasaur,
        squirtle,
      ]);
    });

    it('descending', () => {
      expect(sortPokemon(pokemon, 'type-desc')).toEqual([
        squirtle,
        bulbasaur,
        charmander,
      ]);
    });
  });
});

describe('filterPokemon', () => {
  const pokemon: Pokemon[] = [bulbasaur, charmander, squirtle];

  it('can filter by name', () => {
    expect(filterPokemon(pokemon, 'bulb', [], '')).toEqual([bulbasaur]);
  });

  it('can filter by type', () => {
    expect(filterPokemon(pokemon, '', ['Fire'], '')).toEqual([charmander]);
  });

  it('can sort by name', () => {
    expect(filterPokemon(pokemon, '', [], 'name-desc')).toEqual([
      squirtle,
      charmander,
      bulbasaur,
    ]);
  });

  it('can filter by name and type', () => {
    expect(filterPokemon(pokemon, 'squirt', ['Fire'], '')).toEqual([]);
  });
});
