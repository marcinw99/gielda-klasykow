import gql from "graphql-tag";

export const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY($filters: PostWhereInput, $sorters: PostOrderByInput) {
    posts(where: $filters, orderBy: $sorters) {
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

export const AVAILABLE_MODELS_OF_BRAND = gql`
  query AVAILABLE_MODELS_OF_BRAND($brand: Brand!) {
    availableModelsOfBrand(brand: $brand) {
      value
      count
    }
  }
`;
