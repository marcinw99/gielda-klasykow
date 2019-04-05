import gql from "graphql-tag";

export const DELETE_POST_MUTATION = gql`
  mutation DELETE_POST_MUTATION($id: ID!) {
    deletePost(id: $id) {
      car {
        brand
        model
      }
    }
  }
`;
