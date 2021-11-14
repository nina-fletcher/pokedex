/** ordering options when selecting data from "users" */
type TypeFormat = {
  color: string;
  id: number;
  value: string;
};

export const TYPES_MAP: { [name: string]: TypeFormat } = {
  Fairy: {
    color: 'purple',
    id: 18,
    value: 'Fairy',
  },
  '???': {
    color: 'geekblue',
    id: 10001,
    value: '???',
  },
  Shadow: {
    color: 'geekblue',
    id: 10002,
    value: 'Shadow',
  },
  Normal: {
    color: '',
    id: 1,
    value: 'Normal',
  },
  Fighting: {
    color: 'volcano',
    id: 2,
    value: 'Fighting',
  },
  Flying: {
    color: 'lime',
    id: 3,
    value: 'Flying',
  },
  Poison: {
    color: 'purple',
    id: 4,
    value: 'Poison',
  },
  Ground: {
    color: 'volcano',
    id: 5,
    value: 'Ground',
  },
  Rock: {
    color: 'orange',
    id: 6,
    value: 'Rock',
  },
  Bug: {
    color: 'green',
    id: 7,
    value: 'Bug',
  },
  Ghost: {
    color: 'geekblue',
    id: 8,
    value: 'Ghost',
  },
  Steel: {
    color: 'geekblue',
    id: 9,
    value: 'Steel',
  },
  Fire: {
    color: 'red',
    id: 10,
    value: 'Fire',
  },
  Water: {
    color: 'blue',
    id: 11,
    value: 'Water',
  },
  Grass: {
    color: 'green',
    id: 12,
    value: 'Grass',
  },
  Electric: {
    color: 'cyan',
    id: 13,
    value: 'Electric',
  },
  Psychic: {
    color: 'purple',
    id: 14,
    value: 'Psychic',
  },
  Ice: {
    color: 'cyan',
    id: 15,
    value: 'Ice',
  },
  Dragon: {
    color: 'magenta',
    id: 16,
    value: 'Dragon',
  },
  Dark: {
    color: 'magenta',
    id: 17,
    value: 'Dark',
  },
};

export const TYPES_LIST: TypeFormat[] = Object.values(TYPES_MAP);
