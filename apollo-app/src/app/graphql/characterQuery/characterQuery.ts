
import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Characters {
    characters {
      results {
        id
        image
        name
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      image
      gender
      species
      status
      location {
        id
        name
        dimension
      }
      origin {
        id
        name
      }
    }
  }
`;
