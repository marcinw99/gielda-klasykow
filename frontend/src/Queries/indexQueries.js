import gql from "graphql-tag";

export const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY($filters: PostWhereInput) {
    posts(where: $filters) {
      price
      avatar
      car {
        segment
        brand
        model
        version
        fuelType
        productionYear
        mileage
        engineSize
        power
        torque
      }
    }
  }
`;

export const SEARCHAREA_QUERIES = gql`
  query SEARCHAREA_QUERIES {
    Enums: __type(name: "Car") {
      fields {
        name
        type {
          enumValues {
            name
          }
          kind
          ofType {
            enumValues {
              name
            }
            name
            kind
          }
        }
      }
    }
    Post: __type(name: "Post") {
      fields {
        name
      }
    }
    Car: __type(name: "Car") {
      fields {
        name
      }
    }
  }
`;
