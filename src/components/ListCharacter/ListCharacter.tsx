import React from 'react';
import { ListWrapper } from './style';
import CardCharacter  from '../CardCharacter/CardCharacter';


export default function CharacterList(props: any) {
  const { character } = props;
  return (
    <ListWrapper>
      {character && character.map((data:any) => {
        return <CardCharacter key={data.id} data={data}  />;
      })}
    </ListWrapper>
  )
}