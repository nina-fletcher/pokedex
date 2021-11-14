import type { NextPage } from 'next';
import { Col, Row, Typography } from 'antd';
import { Container, Main } from './styles';
import { useEffect, useState } from 'react';
import { Pokemon } from '../../graphql/generated/config';
import { getFavourites, setFavourites } from '../../utils/localstorage';
import { PokemonCard } from '../../components/PokemonCard';

const Favourites: NextPage = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const updateFavourites = (favourites: Pokemon[]) => {
    setFavourites(favourites);
    setPokemon(favourites);
  };

  useEffect(() => {
    const favourites = getFavourites();

    setPokemon(favourites);
  }, []);

  return (
    <Container>
      <Main>
        <Typography.Title level={1}>Favourites</Typography.Title>
        {pokemon.length == 0 ? (
          <Typography.Text>You currently have no favourites</Typography.Text>
        ) : (
          <div>
            <Row gutter={[16, 16]}>
              {pokemon.map((pokemon: Pokemon) => {
                return (
                  <Col
                    key={pokemon.id}
                    xs={{ span: 24 }}
                    md={{ span: 12 }}
                    xl={{ span: 8 }}
                  >
                    <PokemonCard
                      pokemon={pokemon}
                      setFavourites={updateFavourites}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        )}
      </Main>
    </Container>
  );
};

export default Favourites;
