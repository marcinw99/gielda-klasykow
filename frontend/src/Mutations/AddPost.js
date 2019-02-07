import gql from "graphql-tag";

export const ADD_POST_MUTATION = gql`
  mutation ADD_POST_MUTATION(
    $price: Int!
    $localization: String
    $avatar: String
    $fromCountry: String
    $car: Object!
  ) {
    createPost(
      price: $price
      localization: $localization
      avatar: $avatar
      fromCountry: $fromCountry
      car: $car
    ) {
      price
      car {
        brand
        model
      }
    }
  }
`;
