import { gql } from "@apollo/client";

const authenticateUserMutation = gql`
  mutation Login($token: String!) {
    authForUser(token: $token) {
      token
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;

export default authenticateUserMutation;
