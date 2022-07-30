import '@testing-library/jest-dom';
import { useQuery, gql } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import CharacterCardData from '../components/CardCharacter/CardCharacter';

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


const mocks = [
    {
        request: {
            query: CHARACTERS_QUERY,

        },
        result: {
            data: {
                gender: "Male",
                id: "1",
                image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                name: "Rick Sanchez",
                species: "Human",
                type: ""
            }
        }
    }
];
const mockData  = {
    id: "1",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
    species: "Human",
}
it("renders without error", async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <CharacterCardData data={mockData}
      />
        </MockedProvider>
    );
    const characterName = await screen.findByTestId('name');
    expect(characterName).toHaveTextContent(mockData.name);
    
});