import gql from "graphql-tag";

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signUp(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

export const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signOut {
      message
    }
  }
`;

export const REQUESTPASSWORDRESET_MUTATION = gql`
  mutation REQUESTPASSWORDRESET_MUTATION($email: String!) {
    requestPasswordReset(email: $email) {
      message
    }
  }
`;
