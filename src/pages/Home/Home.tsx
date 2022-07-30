import React, { useState, useEffect } from 'react';
import NameImage from '../../assets/img/name.png';
import Search from '../../components/Search/Search';
import Divider from '../../components/DividerTitle/DividerTitle';
import ListCharacter from '../../components/ListCharacter/ListCharacter';
import { useQuery, gql } from "@apollo/client";
import { Wrapper,Image,ListWrapper } from './styles';


const CHARACTERS_QUERY = gql`
  {
    characters {
      results {
        id
        name
        image
        species
        type
        gender
      }
    }
  }
`;
export default function Home() {
  const { loading, data } = useQuery(CHARACTERS_QUERY);
  const [characterdata, setCharacterData] = useState([]);
  useEffect(() => {
    if (data && data.characters && data.characters.results && data.characters.results.length > 0) {
      setCharacterData(data.characters.results);
    }
  }, [data]);

  const onSearch = (keyword: string) => {
    if (keyword === '') {
      setCharacterData(data.characters.results);
    }
    else {
      let searchedData = data.characters.results && data.characters.results.filter((item: any) => item.name.toLowerCase().includes(keyword.toLowerCase()));
      setCharacterData(searchedData);
    }
  }
  return (
    <> {loading? <>Loading...</>:<Wrapper>
      <Image src={NameImage} />
      <Search onSearch={(value: any) => onSearch(value)} />
      <ListWrapper>
        <Divider title="List of characters" />
        <ListCharacter
          character={characterdata}
        />
      </ListWrapper>
    </Wrapper>}</>
  )
}