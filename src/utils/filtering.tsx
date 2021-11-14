import { Pokemon } from '../graphql/generated/config';

export const hasTypes = (pokemon: Pokemon, types: string[]): boolean => {
  // return true if types filter is empty
  if (types.length == 0) {
    return true;
  }

  return types.every((type) => {
    const typeIndex = pokemon.types?.findIndex((value) => value?.name === type);

    return typeIndex != -1;
  });
};

export const sortPokemon = (pokemon: Pokemon[], sort: string): Pokemon[] => {
  return pokemon.sort((a: Pokemon, b: Pokemon) => {
    switch (sort) {
      default:
      case 'id-asc': {
        return a.id > b.id ? 1 : -1;
      }
      case 'id-desc': {
        return a.id < b.id ? 1 : -1;
      }
      case 'name-asc': {
        return a.name > b.name ? 1 : -1;
      }
      case 'name-desc': {
        return a.name < b.name ? 1 : -1;
      }
      case 'type-asc': {
        return a.types[0].name > b.types[0].name ? 1 : -1;
      }
      case 'type-desc': {
        return a.types[0].name < b.types[0].name ? 1 : -1;
      }
    }
  });
};

export const filterPokemon = (
  pokemon: Pokemon[],
  nameFilter: string,
  typeFilter: string[],
  sort: string
): Pokemon[] => {
  const filteredPokemon = pokemon.filter((pokemon: Pokemon) => {
    return (
      pokemon.name?.includes(nameFilter.toLowerCase()) &&
      hasTypes(pokemon, typeFilter)
    );
  });

  return sortPokemon(filteredPokemon, sort);
};
