import { Pokemon } from '../graphql/generated/config';

export const getFavourites = (): Pokemon[] => {
  const favouritesJSON = localStorage.getItem('pokedex.favourites');
  return favouritesJSON ? JSON.parse(favouritesJSON) : [];
};

export const setFavourites = (pokemon: Pokemon[]) => {
  localStorage.setItem('pokedex.favourites', JSON.stringify(pokemon));
};
