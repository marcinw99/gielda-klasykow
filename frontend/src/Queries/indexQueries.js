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

export const POSSIBLE_ENUMS_VALUES = gql`
  query POSSIBLE_ENUMS_VALUES {
    __type(name: "Car") {
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
  }
`;
