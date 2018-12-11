// Code generated by Prisma (prisma@1.22.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  car: (where?: CarWhereInput) => Promise<boolean>;
  post: (where?: PostWhereInput) => Promise<boolean>;
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

  car: (where: CarWhereUniqueInput) => CarPromise;
  cars: (
    args?: {
      where?: CarWhereInput;
      orderBy?: CarOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Car>;
  carsConnection: (
    args?: {
      where?: CarWhereInput;
      orderBy?: CarOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => CarConnectionPromise;
  post: (where: PostWhereUniqueInput) => PostPromise;
  posts: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Post>;
  postsConnection: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PostConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCar: (data: CarCreateInput) => CarPromise;
  updateCar: (
    args: { data: CarUpdateInput; where: CarWhereUniqueInput }
  ) => CarPromise;
  updateManyCars: (
    args: { data: CarUpdateManyMutationInput; where?: CarWhereInput }
  ) => BatchPayloadPromise;
  upsertCar: (
    args: {
      where: CarWhereUniqueInput;
      create: CarCreateInput;
      update: CarUpdateInput;
    }
  ) => CarPromise;
  deleteCar: (where: CarWhereUniqueInput) => CarPromise;
  deleteManyCars: (where?: CarWhereInput) => BatchPayloadPromise;
  createPost: (data: PostCreateInput) => PostPromise;
  updatePost: (
    args: { data: PostUpdateInput; where: PostWhereUniqueInput }
  ) => PostPromise;
  updateManyPosts: (
    args: { data: PostUpdateManyMutationInput; where?: PostWhereInput }
  ) => BatchPayloadPromise;
  upsertPost: (
    args: {
      where: PostWhereUniqueInput;
      create: PostCreateInput;
      update: PostUpdateInput;
    }
  ) => PostPromise;
  deletePost: (where: PostWhereUniqueInput) => PostPromise;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  car: (
    where?: CarSubscriptionWhereInput
  ) => CarSubscriptionPayloadSubscription;
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CarOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "segment_ASC"
  | "segment_DESC"
  | "brand_ASC"
  | "brand_DESC"
  | "model_ASC"
  | "model_DESC"
  | "version_ASC"
  | "version_DESC"
  | "mileage_ASC"
  | "mileage_DESC"
  | "productionYear_ASC"
  | "productionYear_DESC"
  | "fuelType_ASC"
  | "fuelType_DESC"
  | "engineSize_ASC"
  | "engineSize_DESC"
  | "power_ASC"
  | "power_DESC"
  | "torque_ASC"
  | "torque_DESC"
  | "transmission_ASC"
  | "transmission_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type FuelType =
  | "BENZYNA"
  | "BENZYNA_LPG"
  | "BENZYNA_CNG"
  | "DIESEL"
  | "HYBRYDA"
  | "ELEKTRYCZNY"
  | "INNY";

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "price_ASC"
  | "price_DESC"
  | "localization_ASC"
  | "localization_DESC"
  | "avatar_ASC"
  | "avatar_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type Brand = "AUDI" | "BMW" | "MERCEDES_BENZ" | "SAAB";

export type Segment = "A" | "B" | "C" | "D" | "E" | "F";

export interface CarUpdateDataInput {
  segment?: Segment;
  brand?: Brand;
  model?: String;
  version?: String;
  mileage?: Int;
  productionYear?: Int;
  fuelType?: FuelType;
  engineSize?: Int;
  power?: Int;
  torque?: Int;
  transmission?: String;
}

export interface CarCreateInput {
  segment?: Segment;
  brand: Brand;
  model: String;
  version?: String;
  mileage?: Int;
  productionYear?: Int;
  fuelType: FuelType;
  engineSize?: Int;
  power?: Int;
  torque?: Int;
  transmission?: String;
}

export interface CarCreateOneInput {
  create?: CarCreateInput;
  connect?: CarWhereUniqueInput;
}

export type CarWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PostWhereInput {
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
  car?: CarWhereInput;
  price?: Int;
  price_not?: Int;
  price_in?: Int[] | Int;
  price_not_in?: Int[] | Int;
  price_lt?: Int;
  price_lte?: Int;
  price_gt?: Int;
  price_gte?: Int;
  localization?: String;
  localization_not?: String;
  localization_in?: String[] | String;
  localization_not_in?: String[] | String;
  localization_lt?: String;
  localization_lte?: String;
  localization_gt?: String;
  localization_gte?: String;
  localization_contains?: String;
  localization_not_contains?: String;
  localization_starts_with?: String;
  localization_not_starts_with?: String;
  localization_ends_with?: String;
  localization_not_ends_with?: String;
  avatar?: String;
  avatar_not?: String;
  avatar_in?: String[] | String;
  avatar_not_in?: String[] | String;
  avatar_lt?: String;
  avatar_lte?: String;
  avatar_gt?: String;
  avatar_gte?: String;
  avatar_contains?: String;
  avatar_not_contains?: String;
  avatar_starts_with?: String;
  avatar_not_starts_with?: String;
  avatar_ends_with?: String;
  avatar_not_ends_with?: String;
  AND?: PostWhereInput[] | PostWhereInput;
  OR?: PostWhereInput[] | PostWhereInput;
  NOT?: PostWhereInput[] | PostWhereInput;
}

export interface CarWhereInput {
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
  segment?: Segment;
  segment_not?: Segment;
  segment_in?: Segment[] | Segment;
  segment_not_in?: Segment[] | Segment;
  brand?: Brand;
  brand_not?: Brand;
  brand_in?: Brand[] | Brand;
  brand_not_in?: Brand[] | Brand;
  model?: String;
  model_not?: String;
  model_in?: String[] | String;
  model_not_in?: String[] | String;
  model_lt?: String;
  model_lte?: String;
  model_gt?: String;
  model_gte?: String;
  model_contains?: String;
  model_not_contains?: String;
  model_starts_with?: String;
  model_not_starts_with?: String;
  model_ends_with?: String;
  model_not_ends_with?: String;
  version?: String;
  version_not?: String;
  version_in?: String[] | String;
  version_not_in?: String[] | String;
  version_lt?: String;
  version_lte?: String;
  version_gt?: String;
  version_gte?: String;
  version_contains?: String;
  version_not_contains?: String;
  version_starts_with?: String;
  version_not_starts_with?: String;
  version_ends_with?: String;
  version_not_ends_with?: String;
  mileage?: Int;
  mileage_not?: Int;
  mileage_in?: Int[] | Int;
  mileage_not_in?: Int[] | Int;
  mileage_lt?: Int;
  mileage_lte?: Int;
  mileage_gt?: Int;
  mileage_gte?: Int;
  productionYear?: Int;
  productionYear_not?: Int;
  productionYear_in?: Int[] | Int;
  productionYear_not_in?: Int[] | Int;
  productionYear_lt?: Int;
  productionYear_lte?: Int;
  productionYear_gt?: Int;
  productionYear_gte?: Int;
  fuelType?: FuelType;
  fuelType_not?: FuelType;
  fuelType_in?: FuelType[] | FuelType;
  fuelType_not_in?: FuelType[] | FuelType;
  engineSize?: Int;
  engineSize_not?: Int;
  engineSize_in?: Int[] | Int;
  engineSize_not_in?: Int[] | Int;
  engineSize_lt?: Int;
  engineSize_lte?: Int;
  engineSize_gt?: Int;
  engineSize_gte?: Int;
  power?: Int;
  power_not?: Int;
  power_in?: Int[] | Int;
  power_not_in?: Int[] | Int;
  power_lt?: Int;
  power_lte?: Int;
  power_gt?: Int;
  power_gte?: Int;
  torque?: Int;
  torque_not?: Int;
  torque_in?: Int[] | Int;
  torque_not_in?: Int[] | Int;
  torque_lt?: Int;
  torque_lte?: Int;
  torque_gt?: Int;
  torque_gte?: Int;
  transmission?: String;
  transmission_not?: String;
  transmission_in?: String[] | String;
  transmission_not_in?: String[] | String;
  transmission_lt?: String;
  transmission_lte?: String;
  transmission_gt?: String;
  transmission_gte?: String;
  transmission_contains?: String;
  transmission_not_contains?: String;
  transmission_starts_with?: String;
  transmission_not_starts_with?: String;
  transmission_ends_with?: String;
  transmission_not_ends_with?: String;
  AND?: CarWhereInput[] | CarWhereInput;
  OR?: CarWhereInput[] | CarWhereInput;
  NOT?: CarWhereInput[] | CarWhereInput;
}

export interface CarSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CarWhereInput;
  AND?: CarSubscriptionWhereInput[] | CarSubscriptionWhereInput;
  OR?: CarSubscriptionWhereInput[] | CarSubscriptionWhereInput;
  NOT?: CarSubscriptionWhereInput[] | CarSubscriptionWhereInput;
}

export interface CarUpsertNestedInput {
  update: CarUpdateDataInput;
  create: CarCreateInput;
}

export interface CarUpdateOneInput {
  create?: CarCreateInput;
  update?: CarUpdateDataInput;
  upsert?: CarUpsertNestedInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: CarWhereUniqueInput;
}

export interface CarUpdateInput {
  segment?: Segment;
  brand?: Brand;
  model?: String;
  version?: String;
  mileage?: Int;
  productionYear?: Int;
  fuelType?: FuelType;
  engineSize?: Int;
  power?: Int;
  torque?: Int;
  transmission?: String;
}

export interface CarUpdateManyMutationInput {
  segment?: Segment;
  brand?: Brand;
  model?: String;
  version?: String;
  mileage?: Int;
  productionYear?: Int;
  fuelType?: FuelType;
  engineSize?: Int;
  power?: Int;
  torque?: Int;
  transmission?: String;
}

export interface PostCreateInput {
  car?: CarCreateOneInput;
  price: Int;
  localization?: String;
  avatar?: String;
}

export interface PostUpdateInput {
  car?: CarUpdateOneInput;
  price?: Int;
  localization?: String;
  avatar?: String;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PostWhereInput;
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
}

export interface PostUpdateManyMutationInput {
  price?: Int;
  localization?: String;
  avatar?: String;
}

export type PostWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregatePost {
  count: Int;
}

export interface AggregatePostPromise
  extends Promise<AggregatePost>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
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

export interface PostPreviousValues {
  id: ID_Output;
  price: Int;
  localization?: String;
  avatar?: String;
}

export interface PostPreviousValuesPromise
  extends Promise<PostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  price: () => Promise<Int>;
  localization: () => Promise<String>;
  avatar: () => Promise<String>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  price: () => Promise<AsyncIterator<Int>>;
  localization: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
}

export interface CarConnection {}

export interface CarConnectionPromise
  extends Promise<CarConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CarEdge>>() => T;
  aggregate: <T = AggregateCarPromise>() => T;
}

export interface CarConnectionSubscription
  extends Promise<AsyncIterator<CarConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CarEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCarSubscription>() => T;
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

export interface CarSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface CarSubscriptionPayloadPromise
  extends Promise<CarSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CarPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CarPreviousValuesPromise>() => T;
}

export interface CarSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CarSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CarSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CarPreviousValuesSubscription>() => T;
}

export interface CarPreviousValues {
  id: ID_Output;
  segment?: Segment;
  brand: Brand;
  model: String;
  version?: String;
  mileage?: Int;
  productionYear?: Int;
  fuelType: FuelType;
  engineSize?: Int;
  power?: Int;
  torque?: Int;
  transmission?: String;
}

export interface CarPreviousValuesPromise
  extends Promise<CarPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  segment: () => Promise<Segment>;
  brand: () => Promise<Brand>;
  model: () => Promise<String>;
  version: () => Promise<String>;
  mileage: () => Promise<Int>;
  productionYear: () => Promise<Int>;
  fuelType: () => Promise<FuelType>;
  engineSize: () => Promise<Int>;
  power: () => Promise<Int>;
  torque: () => Promise<Int>;
  transmission: () => Promise<String>;
}

export interface CarPreviousValuesSubscription
  extends Promise<AsyncIterator<CarPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  segment: () => Promise<AsyncIterator<Segment>>;
  brand: () => Promise<AsyncIterator<Brand>>;
  model: () => Promise<AsyncIterator<String>>;
  version: () => Promise<AsyncIterator<String>>;
  mileage: () => Promise<AsyncIterator<Int>>;
  productionYear: () => Promise<AsyncIterator<Int>>;
  fuelType: () => Promise<AsyncIterator<FuelType>>;
  engineSize: () => Promise<AsyncIterator<Int>>;
  power: () => Promise<AsyncIterator<Int>>;
  torque: () => Promise<AsyncIterator<Int>>;
  transmission: () => Promise<AsyncIterator<String>>;
}

export interface Post {
  id: ID_Output;
  price: Int;
  localization?: String;
  avatar?: String;
}

export interface PostPromise extends Promise<Post>, Fragmentable {
  id: () => Promise<ID_Output>;
  car: <T = CarPromise>() => T;
  price: () => Promise<Int>;
  localization: () => Promise<String>;
  avatar: () => Promise<String>;
}

export interface PostSubscription
  extends Promise<AsyncIterator<Post>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  car: <T = CarSubscription>() => T;
  price: () => Promise<AsyncIterator<Int>>;
  localization: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
}

export interface Car {
  id: ID_Output;
  segment?: Segment;
  brand: Brand;
  model: String;
  version?: String;
  mileage?: Int;
  productionYear?: Int;
  fuelType: FuelType;
  engineSize?: Int;
  power?: Int;
  torque?: Int;
  transmission?: String;
}

export interface CarPromise extends Promise<Car>, Fragmentable {
  id: () => Promise<ID_Output>;
  segment: () => Promise<Segment>;
  brand: () => Promise<Brand>;
  model: () => Promise<String>;
  version: () => Promise<String>;
  mileage: () => Promise<Int>;
  productionYear: () => Promise<Int>;
  fuelType: () => Promise<FuelType>;
  engineSize: () => Promise<Int>;
  power: () => Promise<Int>;
  torque: () => Promise<Int>;
  transmission: () => Promise<String>;
}

export interface CarSubscription
  extends Promise<AsyncIterator<Car>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  segment: () => Promise<AsyncIterator<Segment>>;
  brand: () => Promise<AsyncIterator<Brand>>;
  model: () => Promise<AsyncIterator<String>>;
  version: () => Promise<AsyncIterator<String>>;
  mileage: () => Promise<AsyncIterator<Int>>;
  productionYear: () => Promise<AsyncIterator<Int>>;
  fuelType: () => Promise<AsyncIterator<FuelType>>;
  engineSize: () => Promise<AsyncIterator<Int>>;
  power: () => Promise<AsyncIterator<Int>>;
  torque: () => Promise<AsyncIterator<Int>>;
  transmission: () => Promise<AsyncIterator<String>>;
}

export interface PostEdge {
  cursor: String;
}

export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
  node: <T = PostPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdge>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PostSubscriptionPayloadPromise
  extends Promise<PostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PostPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValuesPromise>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface CarEdge {
  cursor: String;
}

export interface CarEdgePromise extends Promise<CarEdge>, Fragmentable {
  node: <T = CarPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CarEdgeSubscription
  extends Promise<AsyncIterator<CarEdge>>,
    Fragmentable {
  node: <T = CarSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCar {
  count: Int;
}

export interface AggregateCarPromise
  extends Promise<AggregateCar>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCarSubscription
  extends Promise<AsyncIterator<AggregateCar>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PostConnection {}

export interface PostConnectionPromise
  extends Promise<PostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PostEdge>>() => T;
  aggregate: <T = AggregatePostPromise>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "Brand",
    embedded: false
  },
  {
    name: "Car",
    embedded: false
  },
  {
    name: "FuelType",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Segment",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
