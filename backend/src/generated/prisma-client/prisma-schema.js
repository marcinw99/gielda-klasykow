module.exports = {
        typeDefs: /* GraphQL */ `type additionalAccessories_Appereance {
  id: ID!
  ALLOY_WHEELS: Boolean
  TINTED_WINDOWS: Boolean
  METALLIC_PAINT: Boolean
  MATTE_PAINT: Boolean
  PEARL_PAINT: Boolean
}

type additionalAccessories_AppereanceConnection {
  pageInfo: PageInfo!
  edges: [additionalAccessories_AppereanceEdge]!
  aggregate: AggregateadditionalAccessories_Appereance!
}

input additionalAccessories_AppereanceCreateInput {
  ALLOY_WHEELS: Boolean
  TINTED_WINDOWS: Boolean
  METALLIC_PAINT: Boolean
  MATTE_PAINT: Boolean
  PEARL_PAINT: Boolean
}

input additionalAccessories_AppereanceCreateOneInput {
  create: additionalAccessories_AppereanceCreateInput
  connect: additionalAccessories_AppereanceWhereUniqueInput
}

type additionalAccessories_AppereanceEdge {
  node: additionalAccessories_Appereance!
  cursor: String!
}

enum additionalAccessories_AppereanceOrderByInput {
  id_ASC
  id_DESC
  ALLOY_WHEELS_ASC
  ALLOY_WHEELS_DESC
  TINTED_WINDOWS_ASC
  TINTED_WINDOWS_DESC
  METALLIC_PAINT_ASC
  METALLIC_PAINT_DESC
  MATTE_PAINT_ASC
  MATTE_PAINT_DESC
  PEARL_PAINT_ASC
  PEARL_PAINT_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type additionalAccessories_AppereancePreviousValues {
  id: ID!
  ALLOY_WHEELS: Boolean
  TINTED_WINDOWS: Boolean
  METALLIC_PAINT: Boolean
  MATTE_PAINT: Boolean
  PEARL_PAINT: Boolean
}

type additionalAccessories_AppereanceSubscriptionPayload {
  mutation: MutationType!
  node: additionalAccessories_Appereance
  updatedFields: [String!]
  previousValues: additionalAccessories_AppereancePreviousValues
}

input additionalAccessories_AppereanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: additionalAccessories_AppereanceWhereInput
  AND: [additionalAccessories_AppereanceSubscriptionWhereInput!]
  OR: [additionalAccessories_AppereanceSubscriptionWhereInput!]
  NOT: [additionalAccessories_AppereanceSubscriptionWhereInput!]
}

input additionalAccessories_AppereanceUpdateDataInput {
  ALLOY_WHEELS: Boolean
  TINTED_WINDOWS: Boolean
  METALLIC_PAINT: Boolean
  MATTE_PAINT: Boolean
  PEARL_PAINT: Boolean
}

input additionalAccessories_AppereanceUpdateInput {
  ALLOY_WHEELS: Boolean
  TINTED_WINDOWS: Boolean
  METALLIC_PAINT: Boolean
  MATTE_PAINT: Boolean
  PEARL_PAINT: Boolean
}

input additionalAccessories_AppereanceUpdateManyMutationInput {
  ALLOY_WHEELS: Boolean
  TINTED_WINDOWS: Boolean
  METALLIC_PAINT: Boolean
  MATTE_PAINT: Boolean
  PEARL_PAINT: Boolean
}

input additionalAccessories_AppereanceUpdateOneInput {
  create: additionalAccessories_AppereanceCreateInput
  update: additionalAccessories_AppereanceUpdateDataInput
  upsert: additionalAccessories_AppereanceUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: additionalAccessories_AppereanceWhereUniqueInput
}

input additionalAccessories_AppereanceUpsertNestedInput {
  update: additionalAccessories_AppereanceUpdateDataInput!
  create: additionalAccessories_AppereanceCreateInput!
}

input additionalAccessories_AppereanceWhereInput {
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
  ALLOY_WHEELS: Boolean
  ALLOY_WHEELS_not: Boolean
  TINTED_WINDOWS: Boolean
  TINTED_WINDOWS_not: Boolean
  METALLIC_PAINT: Boolean
  METALLIC_PAINT_not: Boolean
  MATTE_PAINT: Boolean
  MATTE_PAINT_not: Boolean
  PEARL_PAINT: Boolean
  PEARL_PAINT_not: Boolean
  AND: [additionalAccessories_AppereanceWhereInput!]
  OR: [additionalAccessories_AppereanceWhereInput!]
  NOT: [additionalAccessories_AppereanceWhereInput!]
}

input additionalAccessories_AppereanceWhereUniqueInput {
  id: ID
}

type additionalAccessories_Comfort_Driver {
  id: ID!
  POWER_STEERING: Boolean
  HEATED_STEERING_WHEEL: Boolean
  MULTIFUNCTION_STEERING_WHEEL: Boolean
  PADDLE_SHIFTERS: Boolean
  ACTIVE_SUSPENSION: Boolean
  REGULATED_SUSPENSION: Boolean
  ELECTRIC_MIRRORS: Boolean
  HEATED_MIRRORS: Boolean
  ON_BOARD_COMPUTER: Boolean
  PARKING_SENSOR_FRONT: Boolean
  PARKING_SENSOR_BACK: Boolean
  REVERSE_CAMERA: Boolean
  RAIN_SENSOR: Boolean
  CRUISE_CONTROL: Boolean
  FOG_LIGHTS: Boolean
  LED_LIGHTS: Boolean
  XENON_LIGHTS: Boolean
  GPS_NAVIGATION: Boolean
  SPEED_LIMITER: Boolean
}

type additionalAccessories_Comfort_DriverConnection {
  pageInfo: PageInfo!
  edges: [additionalAccessories_Comfort_DriverEdge]!
  aggregate: AggregateadditionalAccessories_Comfort_Driver!
}

input additionalAccessories_Comfort_DriverCreateInput {
  POWER_STEERING: Boolean
  HEATED_STEERING_WHEEL: Boolean
  MULTIFUNCTION_STEERING_WHEEL: Boolean
  PADDLE_SHIFTERS: Boolean
  ACTIVE_SUSPENSION: Boolean
  REGULATED_SUSPENSION: Boolean
  ELECTRIC_MIRRORS: Boolean
  HEATED_MIRRORS: Boolean
  ON_BOARD_COMPUTER: Boolean
  PARKING_SENSOR_FRONT: Boolean
  PARKING_SENSOR_BACK: Boolean
  REVERSE_CAMERA: Boolean
  RAIN_SENSOR: Boolean
  CRUISE_CONTROL: Boolean
  FOG_LIGHTS: Boolean
  LED_LIGHTS: Boolean
  XENON_LIGHTS: Boolean
  GPS_NAVIGATION: Boolean
  SPEED_LIMITER: Boolean
}

input additionalAccessories_Comfort_DriverCreateOneInput {
  create: additionalAccessories_Comfort_DriverCreateInput
  connect: additionalAccessories_Comfort_DriverWhereUniqueInput
}

type additionalAccessories_Comfort_DriverEdge {
  node: additionalAccessories_Comfort_Driver!
  cursor: String!
}

enum additionalAccessories_Comfort_DriverOrderByInput {
  id_ASC
  id_DESC
  POWER_STEERING_ASC
  POWER_STEERING_DESC
  HEATED_STEERING_WHEEL_ASC
  HEATED_STEERING_WHEEL_DESC
  MULTIFUNCTION_STEERING_WHEEL_ASC
  MULTIFUNCTION_STEERING_WHEEL_DESC
  PADDLE_SHIFTERS_ASC
  PADDLE_SHIFTERS_DESC
  ACTIVE_SUSPENSION_ASC
  ACTIVE_SUSPENSION_DESC
  REGULATED_SUSPENSION_ASC
  REGULATED_SUSPENSION_DESC
  ELECTRIC_MIRRORS_ASC
  ELECTRIC_MIRRORS_DESC
  HEATED_MIRRORS_ASC
  HEATED_MIRRORS_DESC
  ON_BOARD_COMPUTER_ASC
  ON_BOARD_COMPUTER_DESC
  PARKING_SENSOR_FRONT_ASC
  PARKING_SENSOR_FRONT_DESC
  PARKING_SENSOR_BACK_ASC
  PARKING_SENSOR_BACK_DESC
  REVERSE_CAMERA_ASC
  REVERSE_CAMERA_DESC
  RAIN_SENSOR_ASC
  RAIN_SENSOR_DESC
  CRUISE_CONTROL_ASC
  CRUISE_CONTROL_DESC
  FOG_LIGHTS_ASC
  FOG_LIGHTS_DESC
  LED_LIGHTS_ASC
  LED_LIGHTS_DESC
  XENON_LIGHTS_ASC
  XENON_LIGHTS_DESC
  GPS_NAVIGATION_ASC
  GPS_NAVIGATION_DESC
  SPEED_LIMITER_ASC
  SPEED_LIMITER_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type additionalAccessories_Comfort_DriverPreviousValues {
  id: ID!
  POWER_STEERING: Boolean
  HEATED_STEERING_WHEEL: Boolean
  MULTIFUNCTION_STEERING_WHEEL: Boolean
  PADDLE_SHIFTERS: Boolean
  ACTIVE_SUSPENSION: Boolean
  REGULATED_SUSPENSION: Boolean
  ELECTRIC_MIRRORS: Boolean
  HEATED_MIRRORS: Boolean
  ON_BOARD_COMPUTER: Boolean
  PARKING_SENSOR_FRONT: Boolean
  PARKING_SENSOR_BACK: Boolean
  REVERSE_CAMERA: Boolean
  RAIN_SENSOR: Boolean
  CRUISE_CONTROL: Boolean
  FOG_LIGHTS: Boolean
  LED_LIGHTS: Boolean
  XENON_LIGHTS: Boolean
  GPS_NAVIGATION: Boolean
  SPEED_LIMITER: Boolean
}

type additionalAccessories_Comfort_DriverSubscriptionPayload {
  mutation: MutationType!
  node: additionalAccessories_Comfort_Driver
  updatedFields: [String!]
  previousValues: additionalAccessories_Comfort_DriverPreviousValues
}

input additionalAccessories_Comfort_DriverSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: additionalAccessories_Comfort_DriverWhereInput
  AND: [additionalAccessories_Comfort_DriverSubscriptionWhereInput!]
  OR: [additionalAccessories_Comfort_DriverSubscriptionWhereInput!]
  NOT: [additionalAccessories_Comfort_DriverSubscriptionWhereInput!]
}

input additionalAccessories_Comfort_DriverUpdateDataInput {
  POWER_STEERING: Boolean
  HEATED_STEERING_WHEEL: Boolean
  MULTIFUNCTION_STEERING_WHEEL: Boolean
  PADDLE_SHIFTERS: Boolean
  ACTIVE_SUSPENSION: Boolean
  REGULATED_SUSPENSION: Boolean
  ELECTRIC_MIRRORS: Boolean
  HEATED_MIRRORS: Boolean
  ON_BOARD_COMPUTER: Boolean
  PARKING_SENSOR_FRONT: Boolean
  PARKING_SENSOR_BACK: Boolean
  REVERSE_CAMERA: Boolean
  RAIN_SENSOR: Boolean
  CRUISE_CONTROL: Boolean
  FOG_LIGHTS: Boolean
  LED_LIGHTS: Boolean
  XENON_LIGHTS: Boolean
  GPS_NAVIGATION: Boolean
  SPEED_LIMITER: Boolean
}

input additionalAccessories_Comfort_DriverUpdateInput {
  POWER_STEERING: Boolean
  HEATED_STEERING_WHEEL: Boolean
  MULTIFUNCTION_STEERING_WHEEL: Boolean
  PADDLE_SHIFTERS: Boolean
  ACTIVE_SUSPENSION: Boolean
  REGULATED_SUSPENSION: Boolean
  ELECTRIC_MIRRORS: Boolean
  HEATED_MIRRORS: Boolean
  ON_BOARD_COMPUTER: Boolean
  PARKING_SENSOR_FRONT: Boolean
  PARKING_SENSOR_BACK: Boolean
  REVERSE_CAMERA: Boolean
  RAIN_SENSOR: Boolean
  CRUISE_CONTROL: Boolean
  FOG_LIGHTS: Boolean
  LED_LIGHTS: Boolean
  XENON_LIGHTS: Boolean
  GPS_NAVIGATION: Boolean
  SPEED_LIMITER: Boolean
}

input additionalAccessories_Comfort_DriverUpdateManyMutationInput {
  POWER_STEERING: Boolean
  HEATED_STEERING_WHEEL: Boolean
  MULTIFUNCTION_STEERING_WHEEL: Boolean
  PADDLE_SHIFTERS: Boolean
  ACTIVE_SUSPENSION: Boolean
  REGULATED_SUSPENSION: Boolean
  ELECTRIC_MIRRORS: Boolean
  HEATED_MIRRORS: Boolean
  ON_BOARD_COMPUTER: Boolean
  PARKING_SENSOR_FRONT: Boolean
  PARKING_SENSOR_BACK: Boolean
  REVERSE_CAMERA: Boolean
  RAIN_SENSOR: Boolean
  CRUISE_CONTROL: Boolean
  FOG_LIGHTS: Boolean
  LED_LIGHTS: Boolean
  XENON_LIGHTS: Boolean
  GPS_NAVIGATION: Boolean
  SPEED_LIMITER: Boolean
}

input additionalAccessories_Comfort_DriverUpdateOneInput {
  create: additionalAccessories_Comfort_DriverCreateInput
  update: additionalAccessories_Comfort_DriverUpdateDataInput
  upsert: additionalAccessories_Comfort_DriverUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: additionalAccessories_Comfort_DriverWhereUniqueInput
}

input additionalAccessories_Comfort_DriverUpsertNestedInput {
  update: additionalAccessories_Comfort_DriverUpdateDataInput!
  create: additionalAccessories_Comfort_DriverCreateInput!
}

input additionalAccessories_Comfort_DriverWhereInput {
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
  POWER_STEERING: Boolean
  POWER_STEERING_not: Boolean
  HEATED_STEERING_WHEEL: Boolean
  HEATED_STEERING_WHEEL_not: Boolean
  MULTIFUNCTION_STEERING_WHEEL: Boolean
  MULTIFUNCTION_STEERING_WHEEL_not: Boolean
  PADDLE_SHIFTERS: Boolean
  PADDLE_SHIFTERS_not: Boolean
  ACTIVE_SUSPENSION: Boolean
  ACTIVE_SUSPENSION_not: Boolean
  REGULATED_SUSPENSION: Boolean
  REGULATED_SUSPENSION_not: Boolean
  ELECTRIC_MIRRORS: Boolean
  ELECTRIC_MIRRORS_not: Boolean
  HEATED_MIRRORS: Boolean
  HEATED_MIRRORS_not: Boolean
  ON_BOARD_COMPUTER: Boolean
  ON_BOARD_COMPUTER_not: Boolean
  PARKING_SENSOR_FRONT: Boolean
  PARKING_SENSOR_FRONT_not: Boolean
  PARKING_SENSOR_BACK: Boolean
  PARKING_SENSOR_BACK_not: Boolean
  REVERSE_CAMERA: Boolean
  REVERSE_CAMERA_not: Boolean
  RAIN_SENSOR: Boolean
  RAIN_SENSOR_not: Boolean
  CRUISE_CONTROL: Boolean
  CRUISE_CONTROL_not: Boolean
  FOG_LIGHTS: Boolean
  FOG_LIGHTS_not: Boolean
  LED_LIGHTS: Boolean
  LED_LIGHTS_not: Boolean
  XENON_LIGHTS: Boolean
  XENON_LIGHTS_not: Boolean
  GPS_NAVIGATION: Boolean
  GPS_NAVIGATION_not: Boolean
  SPEED_LIMITER: Boolean
  SPEED_LIMITER_not: Boolean
  AND: [additionalAccessories_Comfort_DriverWhereInput!]
  OR: [additionalAccessories_Comfort_DriverWhereInput!]
  NOT: [additionalAccessories_Comfort_DriverWhereInput!]
}

input additionalAccessories_Comfort_DriverWhereUniqueInput {
  id: ID
}

type additionalAccessories_Comfort_Passenger {
  id: ID!
  ELECTRIC_FRONT_WINDOWS: Boolean
  ELECTRIC_BACK_WINDOWS: Boolean
  FACTORY_RADIO: Boolean
  NON_STANDARD_RADIO: Boolean
  AUX: Boolean
  MP3: Boolean
  CD: Boolean
  CD_CHANGER: Boolean
  DVD_PLAYER: Boolean
  TV_TUNER: Boolean
  LEATHER_UPHOLSTERY: Boolean
  VELOR_UPHOLSTERY: Boolean
  ELECTRIC_ADJUSTABLE_FRONT_SEATS: Boolean
  ELECTRIC_ADJUSTABLE_BACK_SEATS: Boolean
  HEATED_FRONT_SEATS: Boolean
  HEATED_BACK_SEATS: Boolean
  PANORAMIC_ROOF: Boolean
  SUNROOF: Boolean
  ROOF_RACK: Boolean
  PARKING_HEATER: Boolean
  HEATED_FRONT_WINDSCREEN: Boolean
  AIR_CONDITIONING_AUTOMATIC: Boolean
  AIR_CONDITIONING_DUAL_ZONE: Boolean
  AIR_CONDITIONING_THREE_ZONE: Boolean
  AIR_CONDITIONING_FOUR_ZONE: Boolean
  AIR_CONDITIONING_MANUAL: Boolean
}

type additionalAccessories_Comfort_PassengerConnection {
  pageInfo: PageInfo!
  edges: [additionalAccessories_Comfort_PassengerEdge]!
  aggregate: AggregateadditionalAccessories_Comfort_Passenger!
}

input additionalAccessories_Comfort_PassengerCreateInput {
  ELECTRIC_FRONT_WINDOWS: Boolean
  ELECTRIC_BACK_WINDOWS: Boolean
  FACTORY_RADIO: Boolean
  NON_STANDARD_RADIO: Boolean
  AUX: Boolean
  MP3: Boolean
  CD: Boolean
  CD_CHANGER: Boolean
  DVD_PLAYER: Boolean
  TV_TUNER: Boolean
  LEATHER_UPHOLSTERY: Boolean
  VELOR_UPHOLSTERY: Boolean
  ELECTRIC_ADJUSTABLE_FRONT_SEATS: Boolean
  ELECTRIC_ADJUSTABLE_BACK_SEATS: Boolean
  HEATED_FRONT_SEATS: Boolean
  HEATED_BACK_SEATS: Boolean
  PANORAMIC_ROOF: Boolean
  SUNROOF: Boolean
  ROOF_RACK: Boolean
  PARKING_HEATER: Boolean
  HEATED_FRONT_WINDSCREEN: Boolean
  AIR_CONDITIONING_AUTOMATIC: Boolean
  AIR_CONDITIONING_DUAL_ZONE: Boolean
  AIR_CONDITIONING_THREE_ZONE: Boolean
  AIR_CONDITIONING_FOUR_ZONE: Boolean
  AIR_CONDITIONING_MANUAL: Boolean
}

input additionalAccessories_Comfort_PassengerCreateOneInput {
  create: additionalAccessories_Comfort_PassengerCreateInput
  connect: additionalAccessories_Comfort_PassengerWhereUniqueInput
}

type additionalAccessories_Comfort_PassengerEdge {
  node: additionalAccessories_Comfort_Passenger!
  cursor: String!
}

enum additionalAccessories_Comfort_PassengerOrderByInput {
  id_ASC
  id_DESC
  ELECTRIC_FRONT_WINDOWS_ASC
  ELECTRIC_FRONT_WINDOWS_DESC
  ELECTRIC_BACK_WINDOWS_ASC
  ELECTRIC_BACK_WINDOWS_DESC
  FACTORY_RADIO_ASC
  FACTORY_RADIO_DESC
  NON_STANDARD_RADIO_ASC
  NON_STANDARD_RADIO_DESC
  AUX_ASC
  AUX_DESC
  MP3_ASC
  MP3_DESC
  CD_ASC
  CD_DESC
  CD_CHANGER_ASC
  CD_CHANGER_DESC
  DVD_PLAYER_ASC
  DVD_PLAYER_DESC
  TV_TUNER_ASC
  TV_TUNER_DESC
  LEATHER_UPHOLSTERY_ASC
  LEATHER_UPHOLSTERY_DESC
  VELOR_UPHOLSTERY_ASC
  VELOR_UPHOLSTERY_DESC
  ELECTRIC_ADJUSTABLE_FRONT_SEATS_ASC
  ELECTRIC_ADJUSTABLE_FRONT_SEATS_DESC
  ELECTRIC_ADJUSTABLE_BACK_SEATS_ASC
  ELECTRIC_ADJUSTABLE_BACK_SEATS_DESC
  HEATED_FRONT_SEATS_ASC
  HEATED_FRONT_SEATS_DESC
  HEATED_BACK_SEATS_ASC
  HEATED_BACK_SEATS_DESC
  PANORAMIC_ROOF_ASC
  PANORAMIC_ROOF_DESC
  SUNROOF_ASC
  SUNROOF_DESC
  ROOF_RACK_ASC
  ROOF_RACK_DESC
  PARKING_HEATER_ASC
  PARKING_HEATER_DESC
  HEATED_FRONT_WINDSCREEN_ASC
  HEATED_FRONT_WINDSCREEN_DESC
  AIR_CONDITIONING_AUTOMATIC_ASC
  AIR_CONDITIONING_AUTOMATIC_DESC
  AIR_CONDITIONING_DUAL_ZONE_ASC
  AIR_CONDITIONING_DUAL_ZONE_DESC
  AIR_CONDITIONING_THREE_ZONE_ASC
  AIR_CONDITIONING_THREE_ZONE_DESC
  AIR_CONDITIONING_FOUR_ZONE_ASC
  AIR_CONDITIONING_FOUR_ZONE_DESC
  AIR_CONDITIONING_MANUAL_ASC
  AIR_CONDITIONING_MANUAL_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type additionalAccessories_Comfort_PassengerPreviousValues {
  id: ID!
  ELECTRIC_FRONT_WINDOWS: Boolean
  ELECTRIC_BACK_WINDOWS: Boolean
  FACTORY_RADIO: Boolean
  NON_STANDARD_RADIO: Boolean
  AUX: Boolean
  MP3: Boolean
  CD: Boolean
  CD_CHANGER: Boolean
  DVD_PLAYER: Boolean
  TV_TUNER: Boolean
  LEATHER_UPHOLSTERY: Boolean
  VELOR_UPHOLSTERY: Boolean
  ELECTRIC_ADJUSTABLE_FRONT_SEATS: Boolean
  ELECTRIC_ADJUSTABLE_BACK_SEATS: Boolean
  HEATED_FRONT_SEATS: Boolean
  HEATED_BACK_SEATS: Boolean
  PANORAMIC_ROOF: Boolean
  SUNROOF: Boolean
  ROOF_RACK: Boolean
  PARKING_HEATER: Boolean
  HEATED_FRONT_WINDSCREEN: Boolean
  AIR_CONDITIONING_AUTOMATIC: Boolean
  AIR_CONDITIONING_DUAL_ZONE: Boolean
  AIR_CONDITIONING_THREE_ZONE: Boolean
  AIR_CONDITIONING_FOUR_ZONE: Boolean
  AIR_CONDITIONING_MANUAL: Boolean
}

type additionalAccessories_Comfort_PassengerSubscriptionPayload {
  mutation: MutationType!
  node: additionalAccessories_Comfort_Passenger
  updatedFields: [String!]
  previousValues: additionalAccessories_Comfort_PassengerPreviousValues
}

input additionalAccessories_Comfort_PassengerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: additionalAccessories_Comfort_PassengerWhereInput
  AND: [additionalAccessories_Comfort_PassengerSubscriptionWhereInput!]
  OR: [additionalAccessories_Comfort_PassengerSubscriptionWhereInput!]
  NOT: [additionalAccessories_Comfort_PassengerSubscriptionWhereInput!]
}

input additionalAccessories_Comfort_PassengerUpdateDataInput {
  ELECTRIC_FRONT_WINDOWS: Boolean
  ELECTRIC_BACK_WINDOWS: Boolean
  FACTORY_RADIO: Boolean
  NON_STANDARD_RADIO: Boolean
  AUX: Boolean
  MP3: Boolean
  CD: Boolean
  CD_CHANGER: Boolean
  DVD_PLAYER: Boolean
  TV_TUNER: Boolean
  LEATHER_UPHOLSTERY: Boolean
  VELOR_UPHOLSTERY: Boolean
  ELECTRIC_ADJUSTABLE_FRONT_SEATS: Boolean
  ELECTRIC_ADJUSTABLE_BACK_SEATS: Boolean
  HEATED_FRONT_SEATS: Boolean
  HEATED_BACK_SEATS: Boolean
  PANORAMIC_ROOF: Boolean
  SUNROOF: Boolean
  ROOF_RACK: Boolean
  PARKING_HEATER: Boolean
  HEATED_FRONT_WINDSCREEN: Boolean
  AIR_CONDITIONING_AUTOMATIC: Boolean
  AIR_CONDITIONING_DUAL_ZONE: Boolean
  AIR_CONDITIONING_THREE_ZONE: Boolean
  AIR_CONDITIONING_FOUR_ZONE: Boolean
  AIR_CONDITIONING_MANUAL: Boolean
}

input additionalAccessories_Comfort_PassengerUpdateInput {
  ELECTRIC_FRONT_WINDOWS: Boolean
  ELECTRIC_BACK_WINDOWS: Boolean
  FACTORY_RADIO: Boolean
  NON_STANDARD_RADIO: Boolean
  AUX: Boolean
  MP3: Boolean
  CD: Boolean
  CD_CHANGER: Boolean
  DVD_PLAYER: Boolean
  TV_TUNER: Boolean
  LEATHER_UPHOLSTERY: Boolean
  VELOR_UPHOLSTERY: Boolean
  ELECTRIC_ADJUSTABLE_FRONT_SEATS: Boolean
  ELECTRIC_ADJUSTABLE_BACK_SEATS: Boolean
  HEATED_FRONT_SEATS: Boolean
  HEATED_BACK_SEATS: Boolean
  PANORAMIC_ROOF: Boolean
  SUNROOF: Boolean
  ROOF_RACK: Boolean
  PARKING_HEATER: Boolean
  HEATED_FRONT_WINDSCREEN: Boolean
  AIR_CONDITIONING_AUTOMATIC: Boolean
  AIR_CONDITIONING_DUAL_ZONE: Boolean
  AIR_CONDITIONING_THREE_ZONE: Boolean
  AIR_CONDITIONING_FOUR_ZONE: Boolean
  AIR_CONDITIONING_MANUAL: Boolean
}

input additionalAccessories_Comfort_PassengerUpdateManyMutationInput {
  ELECTRIC_FRONT_WINDOWS: Boolean
  ELECTRIC_BACK_WINDOWS: Boolean
  FACTORY_RADIO: Boolean
  NON_STANDARD_RADIO: Boolean
  AUX: Boolean
  MP3: Boolean
  CD: Boolean
  CD_CHANGER: Boolean
  DVD_PLAYER: Boolean
  TV_TUNER: Boolean
  LEATHER_UPHOLSTERY: Boolean
  VELOR_UPHOLSTERY: Boolean
  ELECTRIC_ADJUSTABLE_FRONT_SEATS: Boolean
  ELECTRIC_ADJUSTABLE_BACK_SEATS: Boolean
  HEATED_FRONT_SEATS: Boolean
  HEATED_BACK_SEATS: Boolean
  PANORAMIC_ROOF: Boolean
  SUNROOF: Boolean
  ROOF_RACK: Boolean
  PARKING_HEATER: Boolean
  HEATED_FRONT_WINDSCREEN: Boolean
  AIR_CONDITIONING_AUTOMATIC: Boolean
  AIR_CONDITIONING_DUAL_ZONE: Boolean
  AIR_CONDITIONING_THREE_ZONE: Boolean
  AIR_CONDITIONING_FOUR_ZONE: Boolean
  AIR_CONDITIONING_MANUAL: Boolean
}

input additionalAccessories_Comfort_PassengerUpdateOneInput {
  create: additionalAccessories_Comfort_PassengerCreateInput
  update: additionalAccessories_Comfort_PassengerUpdateDataInput
  upsert: additionalAccessories_Comfort_PassengerUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: additionalAccessories_Comfort_PassengerWhereUniqueInput
}

input additionalAccessories_Comfort_PassengerUpsertNestedInput {
  update: additionalAccessories_Comfort_PassengerUpdateDataInput!
  create: additionalAccessories_Comfort_PassengerCreateInput!
}

input additionalAccessories_Comfort_PassengerWhereInput {
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
  ELECTRIC_FRONT_WINDOWS: Boolean
  ELECTRIC_FRONT_WINDOWS_not: Boolean
  ELECTRIC_BACK_WINDOWS: Boolean
  ELECTRIC_BACK_WINDOWS_not: Boolean
  FACTORY_RADIO: Boolean
  FACTORY_RADIO_not: Boolean
  NON_STANDARD_RADIO: Boolean
  NON_STANDARD_RADIO_not: Boolean
  AUX: Boolean
  AUX_not: Boolean
  MP3: Boolean
  MP3_not: Boolean
  CD: Boolean
  CD_not: Boolean
  CD_CHANGER: Boolean
  CD_CHANGER_not: Boolean
  DVD_PLAYER: Boolean
  DVD_PLAYER_not: Boolean
  TV_TUNER: Boolean
  TV_TUNER_not: Boolean
  LEATHER_UPHOLSTERY: Boolean
  LEATHER_UPHOLSTERY_not: Boolean
  VELOR_UPHOLSTERY: Boolean
  VELOR_UPHOLSTERY_not: Boolean
  ELECTRIC_ADJUSTABLE_FRONT_SEATS: Boolean
  ELECTRIC_ADJUSTABLE_FRONT_SEATS_not: Boolean
  ELECTRIC_ADJUSTABLE_BACK_SEATS: Boolean
  ELECTRIC_ADJUSTABLE_BACK_SEATS_not: Boolean
  HEATED_FRONT_SEATS: Boolean
  HEATED_FRONT_SEATS_not: Boolean
  HEATED_BACK_SEATS: Boolean
  HEATED_BACK_SEATS_not: Boolean
  PANORAMIC_ROOF: Boolean
  PANORAMIC_ROOF_not: Boolean
  SUNROOF: Boolean
  SUNROOF_not: Boolean
  ROOF_RACK: Boolean
  ROOF_RACK_not: Boolean
  PARKING_HEATER: Boolean
  PARKING_HEATER_not: Boolean
  HEATED_FRONT_WINDSCREEN: Boolean
  HEATED_FRONT_WINDSCREEN_not: Boolean
  AIR_CONDITIONING_AUTOMATIC: Boolean
  AIR_CONDITIONING_AUTOMATIC_not: Boolean
  AIR_CONDITIONING_DUAL_ZONE: Boolean
  AIR_CONDITIONING_DUAL_ZONE_not: Boolean
  AIR_CONDITIONING_THREE_ZONE: Boolean
  AIR_CONDITIONING_THREE_ZONE_not: Boolean
  AIR_CONDITIONING_FOUR_ZONE: Boolean
  AIR_CONDITIONING_FOUR_ZONE_not: Boolean
  AIR_CONDITIONING_MANUAL: Boolean
  AIR_CONDITIONING_MANUAL_not: Boolean
  AND: [additionalAccessories_Comfort_PassengerWhereInput!]
  OR: [additionalAccessories_Comfort_PassengerWhereInput!]
  NOT: [additionalAccessories_Comfort_PassengerWhereInput!]
}

input additionalAccessories_Comfort_PassengerWhereUniqueInput {
  id: ID
}

type additionalAccessories_Safety {
  id: ID!
  ABS: Boolean
  ESP: Boolean
  ASR: Boolean
  CENTRAL_LOCKING: Boolean
  IMMOBILIZER: Boolean
  ALARM: Boolean
  DRIVER_AIRBAG: Boolean
  PASSENGER_AIRBAG: Boolean
  SIDE_FRONT_AIRBAGS: Boolean
  SIDE_BACK_AIRBAGS: Boolean
}

type additionalAccessories_SafetyConnection {
  pageInfo: PageInfo!
  edges: [additionalAccessories_SafetyEdge]!
  aggregate: AggregateadditionalAccessories_Safety!
}

input additionalAccessories_SafetyCreateInput {
  ABS: Boolean
  ESP: Boolean
  ASR: Boolean
  CENTRAL_LOCKING: Boolean
  IMMOBILIZER: Boolean
  ALARM: Boolean
  DRIVER_AIRBAG: Boolean
  PASSENGER_AIRBAG: Boolean
  SIDE_FRONT_AIRBAGS: Boolean
  SIDE_BACK_AIRBAGS: Boolean
}

input additionalAccessories_SafetyCreateOneInput {
  create: additionalAccessories_SafetyCreateInput
  connect: additionalAccessories_SafetyWhereUniqueInput
}

type additionalAccessories_SafetyEdge {
  node: additionalAccessories_Safety!
  cursor: String!
}

enum additionalAccessories_SafetyOrderByInput {
  id_ASC
  id_DESC
  ABS_ASC
  ABS_DESC
  ESP_ASC
  ESP_DESC
  ASR_ASC
  ASR_DESC
  CENTRAL_LOCKING_ASC
  CENTRAL_LOCKING_DESC
  IMMOBILIZER_ASC
  IMMOBILIZER_DESC
  ALARM_ASC
  ALARM_DESC
  DRIVER_AIRBAG_ASC
  DRIVER_AIRBAG_DESC
  PASSENGER_AIRBAG_ASC
  PASSENGER_AIRBAG_DESC
  SIDE_FRONT_AIRBAGS_ASC
  SIDE_FRONT_AIRBAGS_DESC
  SIDE_BACK_AIRBAGS_ASC
  SIDE_BACK_AIRBAGS_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type additionalAccessories_SafetyPreviousValues {
  id: ID!
  ABS: Boolean
  ESP: Boolean
  ASR: Boolean
  CENTRAL_LOCKING: Boolean
  IMMOBILIZER: Boolean
  ALARM: Boolean
  DRIVER_AIRBAG: Boolean
  PASSENGER_AIRBAG: Boolean
  SIDE_FRONT_AIRBAGS: Boolean
  SIDE_BACK_AIRBAGS: Boolean
}

type additionalAccessories_SafetySubscriptionPayload {
  mutation: MutationType!
  node: additionalAccessories_Safety
  updatedFields: [String!]
  previousValues: additionalAccessories_SafetyPreviousValues
}

input additionalAccessories_SafetySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: additionalAccessories_SafetyWhereInput
  AND: [additionalAccessories_SafetySubscriptionWhereInput!]
  OR: [additionalAccessories_SafetySubscriptionWhereInput!]
  NOT: [additionalAccessories_SafetySubscriptionWhereInput!]
}

input additionalAccessories_SafetyUpdateDataInput {
  ABS: Boolean
  ESP: Boolean
  ASR: Boolean
  CENTRAL_LOCKING: Boolean
  IMMOBILIZER: Boolean
  ALARM: Boolean
  DRIVER_AIRBAG: Boolean
  PASSENGER_AIRBAG: Boolean
  SIDE_FRONT_AIRBAGS: Boolean
  SIDE_BACK_AIRBAGS: Boolean
}

input additionalAccessories_SafetyUpdateInput {
  ABS: Boolean
  ESP: Boolean
  ASR: Boolean
  CENTRAL_LOCKING: Boolean
  IMMOBILIZER: Boolean
  ALARM: Boolean
  DRIVER_AIRBAG: Boolean
  PASSENGER_AIRBAG: Boolean
  SIDE_FRONT_AIRBAGS: Boolean
  SIDE_BACK_AIRBAGS: Boolean
}

input additionalAccessories_SafetyUpdateManyMutationInput {
  ABS: Boolean
  ESP: Boolean
  ASR: Boolean
  CENTRAL_LOCKING: Boolean
  IMMOBILIZER: Boolean
  ALARM: Boolean
  DRIVER_AIRBAG: Boolean
  PASSENGER_AIRBAG: Boolean
  SIDE_FRONT_AIRBAGS: Boolean
  SIDE_BACK_AIRBAGS: Boolean
}

input additionalAccessories_SafetyUpdateOneInput {
  create: additionalAccessories_SafetyCreateInput
  update: additionalAccessories_SafetyUpdateDataInput
  upsert: additionalAccessories_SafetyUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: additionalAccessories_SafetyWhereUniqueInput
}

input additionalAccessories_SafetyUpsertNestedInput {
  update: additionalAccessories_SafetyUpdateDataInput!
  create: additionalAccessories_SafetyCreateInput!
}

input additionalAccessories_SafetyWhereInput {
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
  ABS: Boolean
  ABS_not: Boolean
  ESP: Boolean
  ESP_not: Boolean
  ASR: Boolean
  ASR_not: Boolean
  CENTRAL_LOCKING: Boolean
  CENTRAL_LOCKING_not: Boolean
  IMMOBILIZER: Boolean
  IMMOBILIZER_not: Boolean
  ALARM: Boolean
  ALARM_not: Boolean
  DRIVER_AIRBAG: Boolean
  DRIVER_AIRBAG_not: Boolean
  PASSENGER_AIRBAG: Boolean
  PASSENGER_AIRBAG_not: Boolean
  SIDE_FRONT_AIRBAGS: Boolean
  SIDE_FRONT_AIRBAGS_not: Boolean
  SIDE_BACK_AIRBAGS: Boolean
  SIDE_BACK_AIRBAGS_not: Boolean
  AND: [additionalAccessories_SafetyWhereInput!]
  OR: [additionalAccessories_SafetyWhereInput!]
  NOT: [additionalAccessories_SafetyWhereInput!]
}

input additionalAccessories_SafetyWhereUniqueInput {
  id: ID
}

type AggregateadditionalAccessories_Appereance {
  count: Int!
}

type AggregateadditionalAccessories_Comfort_Driver {
  count: Int!
}

type AggregateadditionalAccessories_Comfort_Passenger {
  count: Int!
}

type AggregateadditionalAccessories_Safety {
  count: Int!
}

type AggregateCar {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum Brand {
  ABARTH
  ALFA_ROMEO
  ASTON_MARTIN
  AUDI
  BENTLEY
  BMW
  CADILLAC
  CHEVROLET
  CHRYSLER
  CITROEN
  DE_LOREAN
  DODGE
  FERRARI
  FIAT
  FORD
  HONDA
  HUMMER
  JAGUAR
  JEEP
  KIA
  LADA
  LAMBORGHINI
  LANCIA
  LEXUS
  MASERATI
  MAYBACH
  MAZDA
  MERCEDES_BENZ
  MERCURY
  MITSUBISHI
  MOSKWICZ
  NISSAN
  OLDSMOBILE
  OPEL
  PEUGEOT
  PLYMOUTH
  POLONEZ
  PONTIAC
  PORSCHE
  RENAULT
  ROLLS_ROYCE
  ROVER
  SAAB
  SKODA
  SYRENA
  TOYOTA
  TRABANT
  TRIUMPH
  VOLKSWAGEN
  VOLVO
  WARSZAWA
  WARTBURG
  WOLGA
  ZAPOROZEC
  ZUK
  OTHER
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
  transmission: Transmission
  drive: Drive
  additionalAccessories_Safety: additionalAccessories_Safety
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_Passenger
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_Driver
  additionalAccessories_Appereance: additionalAccessories_Appereance
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  steeringWheelOnTheRight: Boolean
  color: Color
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
  transmission: Transmission
  drive: Drive
  additionalAccessories_Safety: additionalAccessories_SafetyCreateOneInput
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerCreateOneInput
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverCreateOneInput
  additionalAccessories_Appereance: additionalAccessories_AppereanceCreateOneInput
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  steeringWheelOnTheRight: Boolean
  color: Color
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
  drive_ASC
  drive_DESC
  damaged_ASC
  damaged_DESC
  accidentFree_ASC
  accidentFree_DESC
  firstOwner_ASC
  firstOwner_DESC
  registeredInPoland_ASC
  registeredInPoland_DESC
  registeredAsAntiqueCar_ASC
  registeredAsAntiqueCar_DESC
  hasVIN_ASC
  hasVIN_DESC
  tuning_ASC
  tuning_DESC
  hasParticulateFilter_ASC
  hasParticulateFilter_DESC
  steeringWheelOnTheRight_ASC
  steeringWheelOnTheRight_DESC
  color_ASC
  color_DESC
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
  transmission: Transmission
  drive: Drive
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  steeringWheelOnTheRight: Boolean
  color: Color
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
  transmission: Transmission
  drive: Drive
  additionalAccessories_Safety: additionalAccessories_SafetyUpdateOneInput
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerUpdateOneInput
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverUpdateOneInput
  additionalAccessories_Appereance: additionalAccessories_AppereanceUpdateOneInput
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  steeringWheelOnTheRight: Boolean
  color: Color
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
  transmission: Transmission
  drive: Drive
  additionalAccessories_Safety: additionalAccessories_SafetyUpdateOneInput
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerUpdateOneInput
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverUpdateOneInput
  additionalAccessories_Appereance: additionalAccessories_AppereanceUpdateOneInput
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  steeringWheelOnTheRight: Boolean
  color: Color
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
  transmission: Transmission
  drive: Drive
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  steeringWheelOnTheRight: Boolean
  color: Color
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
  transmission: Transmission
  transmission_not: Transmission
  transmission_in: [Transmission!]
  transmission_not_in: [Transmission!]
  drive: Drive
  drive_not: Drive
  drive_in: [Drive!]
  drive_not_in: [Drive!]
  additionalAccessories_Safety: additionalAccessories_SafetyWhereInput
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerWhereInput
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverWhereInput
  additionalAccessories_Appereance: additionalAccessories_AppereanceWhereInput
  damaged: Boolean
  damaged_not: Boolean
  accidentFree: Boolean
  accidentFree_not: Boolean
  firstOwner: Boolean
  firstOwner_not: Boolean
  registeredInPoland: Boolean
  registeredInPoland_not: Boolean
  registeredAsAntiqueCar: Boolean
  registeredAsAntiqueCar_not: Boolean
  hasVIN: Boolean
  hasVIN_not: Boolean
  tuning: Boolean
  tuning_not: Boolean
  hasParticulateFilter: Boolean
  hasParticulateFilter_not: Boolean
  steeringWheelOnTheRight: Boolean
  steeringWheelOnTheRight_not: Boolean
  color: Color
  color_not: Color
  color_in: [Color!]
  color_not_in: [Color!]
  AND: [CarWhereInput!]
  OR: [CarWhereInput!]
  NOT: [CarWhereInput!]
}

input CarWhereUniqueInput {
  id: ID
}

enum Color {
  WHITE
  BEIGE
  MAROON
  BROWN
  BLACK
  RED
  VIOLET
  BLUE
  SILVER
  GRAY
  GREEN
  GOLD
  YELLOW
  OTHER
}

enum Country {
  AUSTRIA
  BELGIUM
  BELARUS
  BULGARIA
  CROATIA
  CZECH_REPUBLIC
  DENMARK
  ESTONIA
  FINLAND
  FRANCE
  GREECE
  SPAIN
  NETHERLANDS
  IRELAND
  ICELAND
  CANADA
  LIECHTENSTEIN
  LITHUANIA
  LUXEMBOURG
  LATVIA
  MONACO
  GERMANY
  NORWAY
  POLAND
  RUSSIA
  ROMANIA
  SLOVAKIA
  SLOVENIA
  USA
  SWITZERLAND
  SWEDEN
  TURKEY
  UKRAINE
  HUNGARY
  UK
  ITALY
}

enum Drive {
  FRONT_WHEEL_DRIVE
  REAR_WHEEL_DRIVE
  FOUR_WHEEL_DRIVE_AUTOMATIC
  FOUR_WHEEL_DRIVE_MANUAL
  FOUR_WHEEL_DRIVE_FIXED
}

enum FuelType {
  BENZYNA
  BENZYNA_LPG
  BENZYNA_CNG
  DIESEL
  HYBRYDA
  ELEKTRYCZNY
  OTHER
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
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createadditionalAccessories_Appereance(data: additionalAccessories_AppereanceCreateInput!): additionalAccessories_Appereance!
  updateadditionalAccessories_Appereance(data: additionalAccessories_AppereanceUpdateInput!, where: additionalAccessories_AppereanceWhereUniqueInput!): additionalAccessories_Appereance
  updateManyadditionalAccessories_Appereances(data: additionalAccessories_AppereanceUpdateManyMutationInput!, where: additionalAccessories_AppereanceWhereInput): BatchPayload!
  upsertadditionalAccessories_Appereance(where: additionalAccessories_AppereanceWhereUniqueInput!, create: additionalAccessories_AppereanceCreateInput!, update: additionalAccessories_AppereanceUpdateInput!): additionalAccessories_Appereance!
  deleteadditionalAccessories_Appereance(where: additionalAccessories_AppereanceWhereUniqueInput!): additionalAccessories_Appereance
  deleteManyadditionalAccessories_Appereances(where: additionalAccessories_AppereanceWhereInput): BatchPayload!
  createadditionalAccessories_Comfort_Driver(data: additionalAccessories_Comfort_DriverCreateInput!): additionalAccessories_Comfort_Driver!
  updateadditionalAccessories_Comfort_Driver(data: additionalAccessories_Comfort_DriverUpdateInput!, where: additionalAccessories_Comfort_DriverWhereUniqueInput!): additionalAccessories_Comfort_Driver
  updateManyadditionalAccessories_Comfort_Drivers(data: additionalAccessories_Comfort_DriverUpdateManyMutationInput!, where: additionalAccessories_Comfort_DriverWhereInput): BatchPayload!
  upsertadditionalAccessories_Comfort_Driver(where: additionalAccessories_Comfort_DriverWhereUniqueInput!, create: additionalAccessories_Comfort_DriverCreateInput!, update: additionalAccessories_Comfort_DriverUpdateInput!): additionalAccessories_Comfort_Driver!
  deleteadditionalAccessories_Comfort_Driver(where: additionalAccessories_Comfort_DriverWhereUniqueInput!): additionalAccessories_Comfort_Driver
  deleteManyadditionalAccessories_Comfort_Drivers(where: additionalAccessories_Comfort_DriverWhereInput): BatchPayload!
  createadditionalAccessories_Comfort_Passenger(data: additionalAccessories_Comfort_PassengerCreateInput!): additionalAccessories_Comfort_Passenger!
  updateadditionalAccessories_Comfort_Passenger(data: additionalAccessories_Comfort_PassengerUpdateInput!, where: additionalAccessories_Comfort_PassengerWhereUniqueInput!): additionalAccessories_Comfort_Passenger
  updateManyadditionalAccessories_Comfort_Passengers(data: additionalAccessories_Comfort_PassengerUpdateManyMutationInput!, where: additionalAccessories_Comfort_PassengerWhereInput): BatchPayload!
  upsertadditionalAccessories_Comfort_Passenger(where: additionalAccessories_Comfort_PassengerWhereUniqueInput!, create: additionalAccessories_Comfort_PassengerCreateInput!, update: additionalAccessories_Comfort_PassengerUpdateInput!): additionalAccessories_Comfort_Passenger!
  deleteadditionalAccessories_Comfort_Passenger(where: additionalAccessories_Comfort_PassengerWhereUniqueInput!): additionalAccessories_Comfort_Passenger
  deleteManyadditionalAccessories_Comfort_Passengers(where: additionalAccessories_Comfort_PassengerWhereInput): BatchPayload!
  createadditionalAccessories_Safety(data: additionalAccessories_SafetyCreateInput!): additionalAccessories_Safety!
  updateadditionalAccessories_Safety(data: additionalAccessories_SafetyUpdateInput!, where: additionalAccessories_SafetyWhereUniqueInput!): additionalAccessories_Safety
  updateManyadditionalAccessories_Safeties(data: additionalAccessories_SafetyUpdateManyMutationInput!, where: additionalAccessories_SafetyWhereInput): BatchPayload!
  upsertadditionalAccessories_Safety(where: additionalAccessories_SafetyWhereUniqueInput!, create: additionalAccessories_SafetyCreateInput!, update: additionalAccessories_SafetyUpdateInput!): additionalAccessories_Safety!
  deleteadditionalAccessories_Safety(where: additionalAccessories_SafetyWhereUniqueInput!): additionalAccessories_Safety
  deleteManyadditionalAccessories_Safeties(where: additionalAccessories_SafetyWhereInput): BatchPayload!
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

enum Permission {
  ADMIN
  USER
  ITEMCREATE
  ITEMUPDATE
  ITEMDELETE
}

type Post {
  id: ID!
  car: Car
  price: Int!
  localization: String
  avatar: String
  fromCountry: Country
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
  fromCountry: Country
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
  fromCountry_ASC
  fromCountry_DESC
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
  fromCountry: Country
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
  fromCountry: Country
}

input PostUpdateManyMutationInput {
  price: Int
  localization: String
  avatar: String
  fromCountry: Country
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
  fromCountry: Country
  fromCountry_not: Country
  fromCountry_in: [Country!]
  fromCountry_not_in: [Country!]
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
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  additionalAccessories_Appereance(where: additionalAccessories_AppereanceWhereUniqueInput!): additionalAccessories_Appereance
  additionalAccessories_Appereances(where: additionalAccessories_AppereanceWhereInput, orderBy: additionalAccessories_AppereanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [additionalAccessories_Appereance]!
  additionalAccessories_AppereancesConnection(where: additionalAccessories_AppereanceWhereInput, orderBy: additionalAccessories_AppereanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): additionalAccessories_AppereanceConnection!
  additionalAccessories_Comfort_Driver(where: additionalAccessories_Comfort_DriverWhereUniqueInput!): additionalAccessories_Comfort_Driver
  additionalAccessories_Comfort_Drivers(where: additionalAccessories_Comfort_DriverWhereInput, orderBy: additionalAccessories_Comfort_DriverOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [additionalAccessories_Comfort_Driver]!
  additionalAccessories_Comfort_DriversConnection(where: additionalAccessories_Comfort_DriverWhereInput, orderBy: additionalAccessories_Comfort_DriverOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): additionalAccessories_Comfort_DriverConnection!
  additionalAccessories_Comfort_Passenger(where: additionalAccessories_Comfort_PassengerWhereUniqueInput!): additionalAccessories_Comfort_Passenger
  additionalAccessories_Comfort_Passengers(where: additionalAccessories_Comfort_PassengerWhereInput, orderBy: additionalAccessories_Comfort_PassengerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [additionalAccessories_Comfort_Passenger]!
  additionalAccessories_Comfort_PassengersConnection(where: additionalAccessories_Comfort_PassengerWhereInput, orderBy: additionalAccessories_Comfort_PassengerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): additionalAccessories_Comfort_PassengerConnection!
  additionalAccessories_Safety(where: additionalAccessories_SafetyWhereUniqueInput!): additionalAccessories_Safety
  additionalAccessories_Safeties(where: additionalAccessories_SafetyWhereInput, orderBy: additionalAccessories_SafetyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [additionalAccessories_Safety]!
  additionalAccessories_SafetiesConnection(where: additionalAccessories_SafetyWhereInput, orderBy: additionalAccessories_SafetyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): additionalAccessories_SafetyConnection!
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
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  additionalAccessories_Appereance(where: additionalAccessories_AppereanceSubscriptionWhereInput): additionalAccessories_AppereanceSubscriptionPayload
  additionalAccessories_Comfort_Driver(where: additionalAccessories_Comfort_DriverSubscriptionWhereInput): additionalAccessories_Comfort_DriverSubscriptionPayload
  additionalAccessories_Comfort_Passenger(where: additionalAccessories_Comfort_PassengerSubscriptionWhereInput): additionalAccessories_Comfort_PassengerSubscriptionPayload
  additionalAccessories_Safety(where: additionalAccessories_SafetySubscriptionWhereInput): additionalAccessories_SafetySubscriptionPayload
}

enum Transmission {
  MANUAL
  AUTOMATIC_CLASSIC
  AUTOMATIC_SHIFTLESS
  AUTOMATIC_SEMI
  AUTOMATIC_DUAL_CLUTCH
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: [Permission!]!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserCreatepermissionsInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: [Permission!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserWhereInput {
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
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: Float
  resetTokenExpiry_not: Float
  resetTokenExpiry_in: [Float!]
  resetTokenExpiry_not_in: [Float!]
  resetTokenExpiry_lt: Float
  resetTokenExpiry_lte: Float
  resetTokenExpiry_gt: Float
  resetTokenExpiry_gte: Float
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    