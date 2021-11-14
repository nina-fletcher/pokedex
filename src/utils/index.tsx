export const formatPokemonId = (id: number): string => {
  return (
    '#' +
    id.toLocaleString('en-US', {
      minimumIntegerDigits: 3,
      useGrouping: false,
    })
  );
};
