import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query Locations($page: Int) {
    locations(page: $page) {
      results {
        id
        dimension
        name
        type
      }
    }
  }
`;

export const GET_LOCATION = gql`
  query Location($locationId: ID!) {
    location(id: $locationId) {
      id
      dimension
      name
      type
      residents {
        id
        image
        name
        episode {
          id
          name
          episode
        }
      }
    }
  }
`;