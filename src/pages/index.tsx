import type { NextPage } from 'next';
import { Col, Input, Row, Select, Typography } from 'antd';
import { Container, Main } from './styles';
import { Pokemon, useGetAllPokemonQuery } from '../graphql/generated/config';
import { PokemonCard } from '../components/PokemonCard';
import { useEffect, useState } from 'react';
import { filterPokemon } from '../utils/filtering';
import { TypeFilter } from '../components/TypeFilter';
import { setFavourites } from '../utils/localstorage';

const { Search } = Input;
const { Option } = Select;

const Home: NextPage = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const { data, loading } = useGetAllPokemonQuery();
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const [sort, setSort] = useState('id-asc');

  const onSearch = (searchString: string) => {
    setNameFilter(searchString);
  };

  function onSort(value: string) {
    setSort(value);
  }

  function onTypeFilter(value: string[]) {
    setTypeFilter(value);
  }

  useEffect(() => {
    if (data?.allPokemon) {
      setPokemon(filterPokemon(data.allPokemon, nameFilter, typeFilter, sort));
    }
  }, [data, nameFilter, typeFilter, sort]);

  useEffect(() => {
    if (data?.allPokemon) {
      setPokemon(data.allPokemon);
    }
  }, [data]);

  return (
    <Container>
      <Main>
        <Typography.Title level={1}>Pokédex</Typography.Title>
        {loading ? (
          <Typography.Text>Loading</Typography.Text>
        ) : (
          <div>
            <Row gutter={[16, 16]}>
              <Col xs={{ span: 24 }}>
                <Search
                  placeholder="Search by name"
                  onSearch={onSearch}
                  style={{ width: '100%' }}
                />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <Select
                  placeholder="Select types"
                  defaultValue="id-asc"
                  onSelect={onSort}
                  style={{ width: '100%' }}
                >
                  <Option value="id-asc">By ID ascending</Option>
                  <Option value="id-desc">By ID descending</Option>
                  <Option value="name-asc">By name ascending</Option>
                  <Option value="name-desc">By name descending</Option>
                  <Option value="type-asc">By type ascending</Option>
                  <Option value="type-desc">By type descending</Option>
                </Select>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                <TypeFilter onChange={onTypeFilter} />
              </Col>
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
                      setFavourites={setFavourites}
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

export default Home;
