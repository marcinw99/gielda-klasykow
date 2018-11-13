module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCar {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Car {
  id: ID!
  manufacturer: String!
  model: String!
  type: String!
  generation: [String!]!
  producedFrom: Int
  producedTo: Int
  fuelType: [String!]!
  engineDisplacement: [Int!]!
  horsePower: [Int!]!
  transmission: [String!]!
}

type CarConnection {
  pageInfo: PageInfo!
  edges: [CarEdge]!
  aggregate: AggregateCar!
}

input CarCreateengineDisplacementInput {
  set: [Int!]
}

input CarCreatefuelTypeInput {
  set: [String!]
}

input CarCreategenerationInput {
  set: [String!]
}

input CarCreatehorsePowerInput {
  set: [Int!]
}

input CarCreateInput {
  manufacturer: String!
  model: String!
  type: String!
  generation: CarCreategenerationInput
  producedFrom: Int
  producedTo: Int
  fuelType: CarCreatefuelTypeInput
  engineDisplacement: CarCreateengineDisplacementInput
  horsePower: CarCreatehorsePowerInput
  transmission: CarCreatetransmissionInput
}

input CarCreatetransmissionInput {
  set: [String!]
}

type CarEdge {
  node: Car!
  cursor: String!
}

enum CarOrderByInput {
  id_ASC
  id_DESC
  manufacturer_ASC
  manufacturer_DESC
  model_ASC
  model_DESC
  type_ASC
  type_DESC
  producedFrom_ASC
  producedFrom_DESC
  producedTo_ASC
  producedTo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CarPreviousValues {
  id: ID!
  manufacturer: String!
  model: String!
  type: String!
  generation: [String!]!
  producedFrom: Int
  producedTo: Int
  fuelType: [String!]!
  engineDisplacement: [Int!]!
  horsePower: [Int!]!
  transmission: [String!]!
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

input CarUpdateengineDisplacementInput {
  set: [Int!]
}

input CarUpdatefuelTypeInput {
  set: [String!]
}

input CarUpdategenerationInput {
  set: [String!]
}

input CarUpdatehorsePowerInput {
  set: [Int!]
}

input CarUpdateInput {
  manufacturer: String
  model: String
  type: String
  generation: CarUpdategenerationInput
  producedFrom: Int
  producedTo: Int
  fuelType: CarUpdatefuelTypeInput
  engineDisplacement: CarUpdateengineDisplacementInput
  horsePower: CarUpdatehorsePowerInput
  transmission: CarUpdatetransmissionInput
}

input CarUpdateManyMutationInput {
  manufacturer: String
  model: String
  type: String
  generation: CarUpdategenerationInput
  producedFrom: Int
  producedTo: Int
  fuelType: CarUpdatefuelTypeInput
  engineDisplacement: CarUpdateengineDisplacementInput
  horsePower: CarUpdatehorsePowerInput
  transmission: CarUpdatetransmissionInput
}

input CarUpdatetransmissionInput {
  set: [String!]
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
  manufacturer: String
  manufacturer_not: String
  manufacturer_in: [String!]
  manufacturer_not_in: [String!]
  manufacturer_lt: String
  manufacturer_lte: String
  manufacturer_gt: String
  manufacturer_gte: String
  manufacturer_contains: String
  manufacturer_not_contains: String
  manufacturer_starts_with: String
  manufacturer_not_starts_with: String
  manufacturer_ends_with: String
  manufacturer_not_ends_with: String
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
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  producedFrom: Int
  producedFrom_not: Int
  producedFrom_in: [Int!]
  producedFrom_not_in: [Int!]
  producedFrom_lt: Int
  producedFrom_lte: Int
  producedFrom_gt: Int
  producedFrom_gte: Int
  producedTo: Int
  producedTo_not: Int
  producedTo_in: [Int!]
  producedTo_not_in: [Int!]
  producedTo_lt: Int
  producedTo_lte: Int
  producedTo_gt: Int
  producedTo_gte: Int
  AND: [CarWhereInput!]
  OR: [CarWhereInput!]
  NOT: [CarWhereInput!]
}

input CarWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCar(data: CarCreateInput!): Car!
  updateCar(data: CarUpdateInput!, where: CarWhereUniqueInput!): Car
  updateManyCars(data: CarUpdateManyMutationInput!, where: CarWhereInput): BatchPayload!
  upsertCar(where: CarWhereUniqueInput!, create: CarCreateInput!, update: CarUpdateInput!): Car!
  deleteCar(where: CarWhereUniqueInput!): Car
  deleteManyCars(where: CarWhereInput): BatchPayload!
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

type Query {
  car(where: CarWhereUniqueInput!): Car
  cars(where: CarWhereInput, orderBy: CarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Car]!
  carsConnection(where: CarWhereInput, orderBy: CarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarConnection!
  node(id: ID!): Node
}

type Subscription {
  car(where: CarSubscriptionWhereInput): CarSubscriptionPayload
}
`
      }
    