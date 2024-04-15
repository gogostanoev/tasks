import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query Episodes($page: Int) {
    episodes(page: $page) {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query Episodes($episodeId: ID!) {
    episode(id: $episodeId) {
      id
      name
      air_date
      episode
      characters {
        id
        image
        name
      }
    }
  }
`;