import { gql } from "@apollo/client";

const loginUserMutation = gql`
  mutation Login($code: String!, $service: String!) {
    loginForUser(code: $code, service: $service) {
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

export default loginUserMutation;
