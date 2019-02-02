import gql from "graphql-tag";

export const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY(
    $filters: PostWhereInput
    $sorters: PostOrderByInput
    $first: Int
    $skip: Int
  ) {
    postsConnection(
      where: $filters
      orderBy: $sorters
      skip: $skip
      first: $first
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      aggregate {
        count
      }
      edges {
        node {
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
        cursor
      }
    }
  }
`;

export const FILTERS_QUERIES = gql`
  query FILTERS_QUERIES {
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
    Brands: availableBrands {
      value
      count
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
