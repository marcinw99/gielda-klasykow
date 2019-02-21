import gql from "graphql-tag";

export const ADD_POST_MUTATION = gql`
  mutation ADD_POST_MUTATION($data: PostCreateInput!) {
    createPost(data: $data) {
      price
      car {
        brand
        model
      }
    }
  }
`;
