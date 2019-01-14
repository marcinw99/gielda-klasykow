import gql from "graphql-tag";

export const RESETPASSWORD_MUTATION = gql`
  mutation RESETPASSWORD_MUTATION(
    $resetToken: String!
    $password: String!
    $passwordRepeat: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      repeatedPassword: $passwordRepeat
    ) {
      id
      email
      name
    }
  }
`;
