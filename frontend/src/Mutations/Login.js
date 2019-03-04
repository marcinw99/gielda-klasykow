import gql from "graphql-tag";

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
    $repeatedPassword: String!
  ) {
    signUp(
      email: $email
      name: $name
      password: $password
      repeatedPassword: $repeatedPassword
    ) {
      id
      email
      name
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION(
    $email: String!
    $password: String!
    $rememberMe: Boolean
  ) {
    signIn(email: $email, password: $password, rememberMe: $rememberMe) {
      id
      email
      name
    }
  }
`;

export const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signOut {
      code
    }
  }
`;
