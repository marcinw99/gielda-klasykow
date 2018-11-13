module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCat {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Cat {
  id: ID!
  name: String!
}

type CatConnection {
  pageInfo: PageInfo!
  edges: [CatEdge]!
  aggregate: AggregateCat!
}

input CatCreateInput {
  name: String!
}

type CatEdge {
  node: Cat!
  cursor: String!
}

enum CatOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CatPreviousValues {
  id: ID!
  name: String!
}

type CatSubscriptionPayload {
  mutation: MutationType!
  node: Cat
  updatedFields: [String!]
  previousValues: CatPreviousValues
}

input CatSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CatWhereInput
  AND: [CatSubscriptionWhereInput!]
  OR: [CatSubscriptionWhereInput!]
  NOT: [CatSubscriptionWhereInput!]
}

input CatUpdateInput {
  name: String
}

input CatUpdateManyMutationInput {
  name: String
}

input CatWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [CatWhereInput!]
  OR: [CatWhereInput!]
  NOT: [CatWhereInput!]
}

input CatWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCat(data: CatCreateInput!): Cat!
  updateCat(data: CatUpdateInput!, where: CatWhereUniqueInput!): Cat
  updateManyCats(data: CatUpdateManyMutationInput!, where: CatWhereInput): BatchPayload!
  upsertCat(where: CatWhereUniqueInput!, create: CatCreateInput!, update: CatUpdateInput!): Cat!
  deleteCat(where: CatWhereUniqueInput!): Cat
  deleteManyCats(where: CatWhereInput): BatchPayload!
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
  cat(where: CatWhereUniqueInput!): Cat
  cats(where: CatWhereInput, orderBy: CatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cat]!
  catsConnection(where: CatWhereInput, orderBy: CatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CatConnection!
  node(id: ID!): Node
}

type Subscription {
  cat(where: CatSubscriptionWhereInput): CatSubscriptionPayload
}
`
      }
    