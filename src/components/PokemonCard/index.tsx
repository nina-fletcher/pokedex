import React, { useEffect, useState } from 'react';
import { Card, Image, Space, Typography } from 'antd';
import { Pokemon, Type } from '../../graphql/generated/config';
import { FavouriteIcon, PokemonDetails } from './styles';
import { TypeTag } from '../TypeTag';
import { formatPokemonId } from '../../utils';
import { getFavourites } from '../../utils/localstorage';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';

interface Props {
  pokemon: Pokemon;
  setFavourites: (value: Pokemon[]) => void;
}

export const PokemonCard: React.FC<Props> = ({ pokemon, setFavourites }) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const onFavourite = () => {
    const favourites = getFavourites();

    setFavourites([...favourites, pokemon]);
    setIsFavourite(true);
  };

  const onUnfavourite = () => {
    const favourites = getFavourites();

    setFavourites(
      favourites.filter((favourite) => {
        return favourite.id != pokemon.id;
      })
    );
    setIsFavourite(false);
  };

  useEffect(() => {
    const favourites = getFavourites();

    const favIndex = favourites.findIndex((favourite: Pokemon) => {
      return favourite.id === pokemon.id;
    });

    setIsFavourite(favIndex != -1);
  });

  return (
    <Card>
      <FavouriteIcon>
        {isFavourite ? (
          <HeartFilled
            style={{ fontSize: 20, color: '#ff1c1c', cursor: 'pointer' }}
            onClick={onUnfavourite}
          />
        ) : (
          <HeartOutlined
            style={{ fontSize: 20, color: '#ff1c1c', cursor: 'pointer' }}
            onClick={onFavourite}
          />
        )}
      </FavouriteIcon>
      <Space>
        <Image
          height={96}
          src={pokemon.sprites?.front_default}
          alt={pokemon.name}
          preview={false}
        />
        <PokemonDetails>
          <div>
            <Typography.Title
              level={2}
              style={{ textTransform: 'capitalize', marginBottom: 0 }}
            >
              {pokemon.name}
            </Typography.Title>
            <Typography.Text>{formatPokemonId(pokemon.id)}</Typography.Text>
          </div>
          <div>
            {pokemon.types?.map((type: Type) => {
              return <TypeTag key={type.id} typeName={type.name} />;
            })}
          </div>
        </PokemonDetails>
      </Space>
    </Card>
  );
};
