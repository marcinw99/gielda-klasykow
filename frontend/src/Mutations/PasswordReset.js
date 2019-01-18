import gql from "graphql-tag";

export const RESETPASSWORD_MUTATION = gql`
  mutation RESETPASSWORD_MUTATION(
    $resetToken: String!
    $password: String!
    $repeatedPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      repeatedPassword: $repeatedPassword
    ) {
      id
      email
      name
    }
  }
`;

export const REQUESTPASSWORDRESET_MUTATION = gql`
  mutation REQUESTPASSWORDRESET_MUTATION($email: String!) {
    requestPasswordReset(email: $email) {
      code
    }
  }
`;
