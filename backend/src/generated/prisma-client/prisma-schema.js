module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCar {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum Brand {
  AUDI
  BMW
  MERCEDES_BENZ
  SAAB
}

type Car {
  id: ID!
  segment: Segment
  brand: Brand!
  model: String!
  version: String
  mileage: Int
  productionYear: Int
  fuelType: FuelType!
  engineSize: Int
  power: Int
  torque: Int
  transmission: String
}

type CarConnection {
  pageInfo: PageInfo!
  edges: [CarEdge]!
  aggregate: AggregateCar!
}

input CarCreateInput {
  segment: Segment
  brand: Brand!
  model: String!
  version: String
  mileage: Int
  productionYear: Int
  fuelType: FuelType!
  engineSize: Int
  power: Int
  torque: Int
  transmission: String
}

input CarCreateOneInput {
  create: CarCreateInput
  connect: CarWhereUniqueInput
}

type CarEdge {
  node: Car!
  cursor: String!
}

enum CarOrderByInput {
  id_ASC
  id_DESC
  segment_ASC
  segment_DESC
  brand_ASC
  brand_DESC
  model_ASC
  model_DESC
  version_ASC
  version_DESC
  mileage_ASC
  mileage_DESC
  productionYear_ASC
  productionYear_DESC
  fuelType_ASC
  fuelType_DESC
  engineSize_ASC
  engineSize_DESC
  power_ASC
  power_DESC
  torque_ASC
  torque_DESC
  transmission_ASC
  transmission_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CarPreviousValues {
  id: ID!
  segment: Segment
  brand: Brand!
  model: String!
  version: String
  mileage: Int
  productionYear: Int
  fuelType: FuelType!
  engineSize: Int
  power: Int
  torque: Int
  transmission: String
}

type CarSubscriptionPayload {
  mutation: MutationType!
  node: Car
  updatedFields: [String!]
  previousValues: CarPreviousValues
}

input CarSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CarWhereInput
  AND: [CarSubscriptionWhereInput!]
  OR: [CarSubscriptionWhereInput!]
  NOT: [CarSubscriptionWhereInput!]
}

input CarUpdateDataInput {
  segment: Segment
  brand: Brand
  model: String
  version: String
  mileage: Int
  productionYear: Int
  fuelType: FuelType
  engineSize: Int
  power: Int
  torque: Int
  transmission: String
}

input CarUpdateInput {
  segment: Segment
  brand: Brand
  model: String
  version: String
  mileage: Int
  productionYear: Int
  fuelType: FuelType
  engineSize: Int
  power: Int
  torque: Int
  transmission: String
}

input CarUpdateManyMutationInput {
  segment: Segment
  brand: Brand
  model: String
  version: String
  mileage: Int
  productionYear: Int
  fuelType: FuelType
  engineSize: Int
  power: Int
  torque: Int
  transmission: String
}

input CarUpdateOneInput {
  create: CarCreateInput
  update: CarUpdateDataInput
  upsert: CarUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CarWhereUniqueInput
}

input CarUpsertNestedInput {
  update: CarUpdateDataInput!
  create: CarCreateInput!
}

input CarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  segment: Segment
  segment_not: Segment
  segment_in: [Segment!]
  segment_not_in: [Segment!]
  brand: Brand
  brand_not: Brand
  brand_in: [Brand!]
  brand_not_in: [Brand!]
  model: String
  model_not: String
  model_in: [String!]
  model_not_in: [String!]
  model_lt: String
  model_lte: String
  model_gt: String
  model_gte: String
  model_contains: String
  model_not_contains: String
  model_starts_with: String
  model_not_starts_with: String
  model_ends_with: String
  model_not_ends_with: String
  version: String
  version_not: String
  version_in: [String!]
  version_not_in: [String!]
  version_lt: String
  version_lte: String
  version_gt: String
  version_gte: String
  version_contains: String
  version_not_contains: String
  version_starts_with: String
  version_not_starts_with: String
  version_ends_with: String
  version_not_ends_with: String
  mileage: Int
  mileage_not: Int
  mileage_in: [Int!]
  mileage_not_in: [Int!]
  mileage_lt: Int
  mileage_lte: Int
  mileage_gt: Int
  mileage_gte: Int
  productionYear: Int
  productionYear_not: Int
  productionYear_in: [Int!]
  productionYear_not_in: [Int!]
  productionYear_lt: Int
  productionYear_lte: Int
  productionYear_gt: Int
  productionYear_gte: Int
  fuelType: FuelType
  fuelType_not: FuelType
  fuelType_in: [FuelType!]
  fuelType_not_in: [FuelType!]
  engineSize: Int
  engineSize_not: Int
  engineSize_in: [Int!]
  engineSize_not_in: [Int!]
  engineSize_lt: Int
  engineSize_lte: Int
  engineSize_gt: Int
  engineSize_gte: Int
  power: Int
  power_not: Int
  power_in: [Int!]
  power_not_in: [Int!]
  power_lt: Int
  power_lte: Int
  power_gt: Int
  power_gte: Int
  torque: Int
  torque_not: Int
  torque_in: [Int!]
  torque_not_in: [Int!]
  torque_lt: Int
  torque_lte: Int
  torque_gt: Int
  torque_gte: Int
  transmission: String
  transmission_not: String
  transmission_in: [String!]
  transmission_not_in: [String!]
  transmission_lt: String
  transmission_lte: String
  transmission_gt: String
  transmission_gte: String
  transmission_contains: String
  transmission_not_contains: String
  transmission_starts_with: String
  transmission_not_starts_with: String
  transmission_ends_with: String
  transmission_not_ends_with: String
  AND: [CarWhereInput!]
  OR: [CarWhereInput!]
  NOT: [CarWhereInput!]
}

input CarWhereUniqueInput {
  id: ID
}

enum FuelType {
  BENZYNA
  BENZYNA_LPG
  BENZYNA_CNG
  DIESEL
  HYBRYDA
  ELEKTRYCZNY
  INNY
}

scalar Long

type Mutation {
  createCar(data: CarCreateInput!): Car!
  updateCar(data: CarUpdateInput!, where: CarWhereUniqueInput!): Car
  updateManyCars(data: CarUpdateManyMutationInput!, where: CarWhereInput): BatchPayload!
  upsertCar(where: CarWhereUniqueInput!, create: CarCreateInput!, update: CarUpdateInput!): Car!
  deleteCar(where: CarWhereUniqueInput!): Car
  deleteManyCars(where: CarWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  car: Car
  price: Int!
  localization: String
  avatar: String
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  car: CarCreateOneInput
  price: Int!
  localization: String
  avatar: String
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  price_ASC
  price_DESC
  localization_ASC
  localization_DESC
  avatar_ASC
  avatar_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  price: Int!
  localization: String
  avatar: String
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  car: CarUpdateOneInput
  price: Int
  localization: String
  avatar: String
}

input PostUpdateManyMutationInput {
  price: Int
  localization: String
  avatar: String
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  car: CarWhereInput
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  localization: String
  localization_not: String
  localization_in: [String!]
  localization_not_in: [String!]
  localization_lt: String
  localization_lte: String
  localization_gt: String
  localization_gte: String
  localization_contains: String
  localization_not_contains: String
  localization_starts_with: String
  localization_not_starts_with: String
  localization_ends_with: String
  localization_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  car(where: CarWhereUniqueInput!): Car
  cars(where: CarWhereInput, orderBy: CarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Car]!
  carsConnection(where: CarWhereInput, orderBy: CarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  node(id: ID!): Node
}

enum Segment {
  A
  B
  C
  D
  E
  F
}

type Subscription {
  car(where: CarSubscriptionWhereInput): CarSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
}
`
      }
    