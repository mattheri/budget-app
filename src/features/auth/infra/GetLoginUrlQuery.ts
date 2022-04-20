import { gql } from "@apollo/client";

const getLoginUrlQuery = gql`
  query Login {
    getLoginUrlsForUser {
      GOOGLE
    }
  }
`;

export default getLoginUrlQuery;
