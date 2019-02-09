import gql from "graphql-tag";

export const ADD_POST_MUTATION = gql`
  mutation ADD_POST_MUTATION(
    $car: CarCreateInput
    $price: Int!
    $localization: String
    $avatar: String
  ) {
    createPost(
      price: $price
      localization: $localization
      avatar: $avatar
      car: { create: $car }
    ) {
      price
    }
  }
`;
