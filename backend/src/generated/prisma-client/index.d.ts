// Code generated by Prisma (prisma@1.20.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  cat: (where?: CatWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  cat: (where: CatWhereUniqueInput) => CatPromise;
  cats: (
    args?: {
      where?: CatWhereInput;
      orderBy?: CatOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Cat>;
  catsConnection: (
    args?: {
      where?: CatWhereInput;
      orderBy?: CatOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => CatConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCat: (data: CatCreateInput) => CatPromise;
  updateCat: (
    args: { data: CatUpdateInput; where: CatWhereUniqueInput }
  ) => CatPromise;
  updateManyCats: (
    args: { data: CatUpdateManyMutationInput; where?: CatWhereInput }
  ) => BatchPayloadPromise;
  upsertCat: (
    args: {
      where: CatWhereUniqueInput;
      create: CatCreateInput;
      update: CatUpdateInput;
    }
  ) => CatPromise;
  deleteCat: (where: CatWhereUniqueInput) => CatPromise;
  deleteManyCats: (where?: CatWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  cat: (
    where?: CatSubscriptionWhereInput
  ) => CatSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CatOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface CatCreateInput {
  name: String;
}

export interface CatUpdateInput {
  name?: String;
}

export interface CatUpdateManyMutationInput {
  name?: String;
}

export interface CatWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: CatWhereInput[] | CatWhereInput;
  OR?: CatWhereInput[] | CatWhereInput;
  NOT?: CatWhereInput[] | CatWhereInput;
}

export interface CatSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CatWhereInput;
  AND?: CatSubscriptionWhereInput[] | CatSubscriptionWhereInput;
  OR?: CatSubscriptionWhereInput[] | CatSubscriptionWhereInput;
  NOT?: CatSubscriptionWhereInput[] | CatSubscriptionWhereInput;
}

export type CatWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateCat {
  count: Int;
}

export interface AggregateCatPromise
  extends Promise<AggregateCat>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCatSubscription
  extends Promise<AsyncIterator<AggregateCat>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CatPreviousValues {
  id: ID_Output;
  name: String;
}

export interface CatPreviousValuesPromise
  extends Promise<CatPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface CatPreviousValuesSubscription
  extends Promise<AsyncIterator<CatPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface CatEdge {
  cursor: String;
}

export interface CatEdgePromise extends Promise<CatEdge>, Fragmentable {
  node: <T = Cat>() => T;
  cursor: () => Promise<String>;
}

export interface CatEdgeSubscription
  extends Promise<AsyncIterator<CatEdge>>,
    Fragmentable {
  node: <T = CatSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface CatSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface CatSubscriptionPayloadPromise
  extends Promise<CatSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Cat>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CatPreviousValues>() => T;
}

export interface CatSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CatSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CatSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CatPreviousValuesSubscription>() => T;
}

export interface Cat {
  id: ID_Output;
  name: String;
}

export interface CatPromise extends Promise<Cat>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface CatSubscription
  extends Promise<AsyncIterator<Cat>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface CatConnection {}

export interface CatConnectionPromise
  extends Promise<CatConnection>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<CatEdge>>() => T;
  aggregate: <T = AggregateCat>() => T;
}

export interface CatConnectionSubscription
  extends Promise<AsyncIterator<CatConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CatEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCatSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Type Defs
 */

export const prisma: Prisma;
