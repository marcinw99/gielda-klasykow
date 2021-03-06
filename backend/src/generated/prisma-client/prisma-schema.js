module.exports = {
        typeDefs: /* GraphQL */ `type additionalAccessories_Appereance {
  id: ID!
  car: Car!
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
  car: CarCreateOneWithoutAdditionalAccessories_AppereanceInput!
  ALLOY_WHEELS: Boolean
  TINTED_WINDOWS: Boolean
  METALLIC_PAINT: Boolean
  MATTE_PAINT: Boolean
  PEARL_PAINT: Boolean
}

input additionalAccessories_AppereanceCreateOneWithoutCarInput {
  create: additionalAccessories_AppereanceCreateWithoutCarInput
  connect: additionalAccessories_AppereanceWhereUniqueInput
}

input additionalAccessories_AppereanceCreateWithoutCarInput {
  ALLOY_WHEELS: Boolean
  TINTED_WINDOWS: Boolean
  METALLIC_PAINT: Boolean
  MATTE_PAINT: Boolean
  PEARL_PAINT: Boolean
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

input additionalAccessories_AppereanceUpdateInput {
  car: CarUpdateOneRequiredWithoutAdditionalAccessories_AppereanceInput
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

input additionalAccessories_AppereanceUpdateOneRequiredWithoutCarInput {
  create: additionalAccessories_AppereanceCreateWithoutCarInput
  update: additionalAccessories_AppereanceUpdateWithoutCarDataInput
  upsert: additionalAccessories_AppereanceUpsertWithoutCarInput
  connect: additionalAccessories_AppereanceWhereUniqueInput
}

input additionalAccessories_AppereanceUpdateWithoutCarDataInput {
  ALLOY_WHEELS: Boolean
  TINTED_WINDOWS: Boolean
  METALLIC_PAINT: Boolean
  MATTE_PAINT: Boolean
  PEARL_PAINT: Boolean
}

input additionalAccessories_AppereanceUpsertWithoutCarInput {
  update: additionalAccessories_AppereanceUpdateWithoutCarDataInput!
  create: additionalAccessories_AppereanceCreateWithoutCarInput!
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
  car: CarWhereInput
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
  car: Car!
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
  car: CarCreateOneWithoutAdditionalAccessories_Comfort_DriverInput!
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

input additionalAccessories_Comfort_DriverCreateOneWithoutCarInput {
  create: additionalAccessories_Comfort_DriverCreateWithoutCarInput
  connect: additionalAccessories_Comfort_DriverWhereUniqueInput
}

input additionalAccessories_Comfort_DriverCreateWithoutCarInput {
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

input additionalAccessories_Comfort_DriverUpdateInput {
  car: CarUpdateOneRequiredWithoutAdditionalAccessories_Comfort_DriverInput
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

input additionalAccessories_Comfort_DriverUpdateOneRequiredWithoutCarInput {
  create: additionalAccessories_Comfort_DriverCreateWithoutCarInput
  update: additionalAccessories_Comfort_DriverUpdateWithoutCarDataInput
  upsert: additionalAccessories_Comfort_DriverUpsertWithoutCarInput
  connect: additionalAccessories_Comfort_DriverWhereUniqueInput
}

input additionalAccessories_Comfort_DriverUpdateWithoutCarDataInput {
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

input additionalAccessories_Comfort_DriverUpsertWithoutCarInput {
  update: additionalAccessories_Comfort_DriverUpdateWithoutCarDataInput!
  create: additionalAccessories_Comfort_DriverCreateWithoutCarInput!
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
  car: CarWhereInput
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
  car: Car!
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
  car: CarCreateOneWithoutAdditionalAccessories_Comfort_PassengerInput!
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

input additionalAccessories_Comfort_PassengerCreateOneWithoutCarInput {
  create: additionalAccessories_Comfort_PassengerCreateWithoutCarInput
  connect: additionalAccessories_Comfort_PassengerWhereUniqueInput
}

input additionalAccessories_Comfort_PassengerCreateWithoutCarInput {
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

input additionalAccessories_Comfort_PassengerUpdateInput {
  car: CarUpdateOneRequiredWithoutAdditionalAccessories_Comfort_PassengerInput
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

input additionalAccessories_Comfort_PassengerUpdateOneRequiredWithoutCarInput {
  create: additionalAccessories_Comfort_PassengerCreateWithoutCarInput
  update: additionalAccessories_Comfort_PassengerUpdateWithoutCarDataInput
  upsert: additionalAccessories_Comfort_PassengerUpsertWithoutCarInput
  connect: additionalAccessories_Comfort_PassengerWhereUniqueInput
}

input additionalAccessories_Comfort_PassengerUpdateWithoutCarDataInput {
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

input additionalAccessories_Comfort_PassengerUpsertWithoutCarInput {
  update: additionalAccessories_Comfort_PassengerUpdateWithoutCarDataInput!
  create: additionalAccessories_Comfort_PassengerCreateWithoutCarInput!
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
  car: CarWhereInput
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
  car: Car!
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
  car: CarCreateOneWithoutAdditionalAccessories_SafetyInput!
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

input additionalAccessories_SafetyCreateOneWithoutCarInput {
  create: additionalAccessories_SafetyCreateWithoutCarInput
  connect: additionalAccessories_SafetyWhereUniqueInput
}

input additionalAccessories_SafetyCreateWithoutCarInput {
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

input additionalAccessories_SafetyUpdateInput {
  car: CarUpdateOneRequiredWithoutAdditionalAccessories_SafetyInput
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

input additionalAccessories_SafetyUpdateOneRequiredWithoutCarInput {
  create: additionalAccessories_SafetyCreateWithoutCarInput
  update: additionalAccessories_SafetyUpdateWithoutCarDataInput
  upsert: additionalAccessories_SafetyUpsertWithoutCarInput
  connect: additionalAccessories_SafetyWhereUniqueInput
}

input additionalAccessories_SafetyUpdateWithoutCarDataInput {
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

input additionalAccessories_SafetyUpsertWithoutCarInput {
  update: additionalAccessories_SafetyUpdateWithoutCarDataInput!
  create: additionalAccessories_SafetyCreateWithoutCarInput!
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
  car: CarWhereInput
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
  post: Post!
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
  additionalAccessories_Safety: additionalAccessories_Safety!
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_Passenger!
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_Driver!
  additionalAccessories_Appereance: additionalAccessories_Appereance!
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

type CarConnection {
  pageInfo: PageInfo!
  edges: [CarEdge]!
  aggregate: AggregateCar!
}

input CarCreateInput {
  post: PostCreateOneWithoutCarInput!
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
  additionalAccessories_Safety: additionalAccessories_SafetyCreateOneWithoutCarInput!
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerCreateOneWithoutCarInput!
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverCreateOneWithoutCarInput!
  additionalAccessories_Appereance: additionalAccessories_AppereanceCreateOneWithoutCarInput!
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

input CarCreateOneWithoutAdditionalAccessories_AppereanceInput {
  create: CarCreateWithoutAdditionalAccessories_AppereanceInput
  connect: CarWhereUniqueInput
}

input CarCreateOneWithoutAdditionalAccessories_Comfort_DriverInput {
  create: CarCreateWithoutAdditionalAccessories_Comfort_DriverInput
  connect: CarWhereUniqueInput
}

input CarCreateOneWithoutAdditionalAccessories_Comfort_PassengerInput {
  create: CarCreateWithoutAdditionalAccessories_Comfort_PassengerInput
  connect: CarWhereUniqueInput
}

input CarCreateOneWithoutAdditionalAccessories_SafetyInput {
  create: CarCreateWithoutAdditionalAccessories_SafetyInput
  connect: CarWhereUniqueInput
}

input CarCreateOneWithoutPostInput {
  create: CarCreateWithoutPostInput
  connect: CarWhereUniqueInput
}

input CarCreateWithoutAdditionalAccessories_AppereanceInput {
  post: PostCreateOneWithoutCarInput!
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
  additionalAccessories_Safety: additionalAccessories_SafetyCreateOneWithoutCarInput!
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerCreateOneWithoutCarInput!
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverCreateOneWithoutCarInput!
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

input CarCreateWithoutAdditionalAccessories_Comfort_DriverInput {
  post: PostCreateOneWithoutCarInput!
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
  additionalAccessories_Safety: additionalAccessories_SafetyCreateOneWithoutCarInput!
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerCreateOneWithoutCarInput!
  additionalAccessories_Appereance: additionalAccessories_AppereanceCreateOneWithoutCarInput!
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

input CarCreateWithoutAdditionalAccessories_Comfort_PassengerInput {
  post: PostCreateOneWithoutCarInput!
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
  additionalAccessories_Safety: additionalAccessories_SafetyCreateOneWithoutCarInput!
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverCreateOneWithoutCarInput!
  additionalAccessories_Appereance: additionalAccessories_AppereanceCreateOneWithoutCarInput!
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

input CarCreateWithoutAdditionalAccessories_SafetyInput {
  post: PostCreateOneWithoutCarInput!
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
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerCreateOneWithoutCarInput!
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverCreateOneWithoutCarInput!
  additionalAccessories_Appereance: additionalAccessories_AppereanceCreateOneWithoutCarInput!
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

input CarCreateWithoutPostInput {
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
  additionalAccessories_Safety: additionalAccessories_SafetyCreateOneWithoutCarInput!
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerCreateOneWithoutCarInput!
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverCreateOneWithoutCarInput!
  additionalAccessories_Appereance: additionalAccessories_AppereanceCreateOneWithoutCarInput!
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

type CarEdge {
  node: Car!
  cursor: String!
}

enum CarOrderByInput {
  id_ASC
  id_DESC
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
  type_ASC
  type_DESC
  steeringWheelOnTheRight_ASC
  steeringWheelOnTheRight_DESC
  color_ASC
  color_DESC
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
  fromCountry_ASC
  fromCountry_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CarPreviousValues {
  id: ID!
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
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
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

input CarUpdateInput {
  post: PostUpdateOneRequiredWithoutCarInput
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
  additionalAccessories_Safety: additionalAccessories_SafetyUpdateOneRequiredWithoutCarInput
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerUpdateOneRequiredWithoutCarInput
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverUpdateOneRequiredWithoutCarInput
  additionalAccessories_Appereance: additionalAccessories_AppereanceUpdateOneRequiredWithoutCarInput
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

input CarUpdateManyMutationInput {
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
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

input CarUpdateOneRequiredWithoutAdditionalAccessories_AppereanceInput {
  create: CarCreateWithoutAdditionalAccessories_AppereanceInput
  update: CarUpdateWithoutAdditionalAccessories_AppereanceDataInput
  upsert: CarUpsertWithoutAdditionalAccessories_AppereanceInput
  connect: CarWhereUniqueInput
}

input CarUpdateOneRequiredWithoutAdditionalAccessories_Comfort_DriverInput {
  create: CarCreateWithoutAdditionalAccessories_Comfort_DriverInput
  update: CarUpdateWithoutAdditionalAccessories_Comfort_DriverDataInput
  upsert: CarUpsertWithoutAdditionalAccessories_Comfort_DriverInput
  connect: CarWhereUniqueInput
}

input CarUpdateOneRequiredWithoutAdditionalAccessories_Comfort_PassengerInput {
  create: CarCreateWithoutAdditionalAccessories_Comfort_PassengerInput
  update: CarUpdateWithoutAdditionalAccessories_Comfort_PassengerDataInput
  upsert: CarUpsertWithoutAdditionalAccessories_Comfort_PassengerInput
  connect: CarWhereUniqueInput
}

input CarUpdateOneRequiredWithoutAdditionalAccessories_SafetyInput {
  create: CarCreateWithoutAdditionalAccessories_SafetyInput
  update: CarUpdateWithoutAdditionalAccessories_SafetyDataInput
  upsert: CarUpsertWithoutAdditionalAccessories_SafetyInput
  connect: CarWhereUniqueInput
}

input CarUpdateOneRequiredWithoutPostInput {
  create: CarCreateWithoutPostInput
  update: CarUpdateWithoutPostDataInput
  upsert: CarUpsertWithoutPostInput
  connect: CarWhereUniqueInput
}

input CarUpdateWithoutAdditionalAccessories_AppereanceDataInput {
  post: PostUpdateOneRequiredWithoutCarInput
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
  additionalAccessories_Safety: additionalAccessories_SafetyUpdateOneRequiredWithoutCarInput
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerUpdateOneRequiredWithoutCarInput
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverUpdateOneRequiredWithoutCarInput
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

input CarUpdateWithoutAdditionalAccessories_Comfort_DriverDataInput {
  post: PostUpdateOneRequiredWithoutCarInput
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
  additionalAccessories_Safety: additionalAccessories_SafetyUpdateOneRequiredWithoutCarInput
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerUpdateOneRequiredWithoutCarInput
  additionalAccessories_Appereance: additionalAccessories_AppereanceUpdateOneRequiredWithoutCarInput
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

input CarUpdateWithoutAdditionalAccessories_Comfort_PassengerDataInput {
  post: PostUpdateOneRequiredWithoutCarInput
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
  additionalAccessories_Safety: additionalAccessories_SafetyUpdateOneRequiredWithoutCarInput
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverUpdateOneRequiredWithoutCarInput
  additionalAccessories_Appereance: additionalAccessories_AppereanceUpdateOneRequiredWithoutCarInput
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

input CarUpdateWithoutAdditionalAccessories_SafetyDataInput {
  post: PostUpdateOneRequiredWithoutCarInput
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
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerUpdateOneRequiredWithoutCarInput
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverUpdateOneRequiredWithoutCarInput
  additionalAccessories_Appereance: additionalAccessories_AppereanceUpdateOneRequiredWithoutCarInput
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

input CarUpdateWithoutPostDataInput {
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
  additionalAccessories_Safety: additionalAccessories_SafetyUpdateOneRequiredWithoutCarInput
  additionalAccessories_Comfort_Passenger: additionalAccessories_Comfort_PassengerUpdateOneRequiredWithoutCarInput
  additionalAccessories_Comfort_Driver: additionalAccessories_Comfort_DriverUpdateOneRequiredWithoutCarInput
  additionalAccessories_Appereance: additionalAccessories_AppereanceUpdateOneRequiredWithoutCarInput
  type: Type
  steeringWheelOnTheRight: Boolean
  color: Color
  damaged: Boolean
  accidentFree: Boolean
  firstOwner: Boolean
  registeredInPoland: Boolean
  registeredAsAntiqueCar: Boolean
  hasVIN: Boolean
  tuning: Boolean
  hasParticulateFilter: Boolean
  fromCountry: Country
}

input CarUpsertWithoutAdditionalAccessories_AppereanceInput {
  update: CarUpdateWithoutAdditionalAccessories_AppereanceDataInput!
  create: CarCreateWithoutAdditionalAccessories_AppereanceInput!
}

input CarUpsertWithoutAdditionalAccessories_Comfort_DriverInput {
  update: CarUpdateWithoutAdditionalAccessories_Comfort_DriverDataInput!
  create: CarCreateWithoutAdditionalAccessories_Comfort_DriverInput!
}

input CarUpsertWithoutAdditionalAccessories_Comfort_PassengerInput {
  update: CarUpdateWithoutAdditionalAccessories_Comfort_PassengerDataInput!
  create: CarCreateWithoutAdditionalAccessories_Comfort_PassengerInput!
}

input CarUpsertWithoutAdditionalAccessories_SafetyInput {
  update: CarUpdateWithoutAdditionalAccessories_SafetyDataInput!
  create: CarCreateWithoutAdditionalAccessories_SafetyInput!
}

input CarUpsertWithoutPostInput {
  update: CarUpdateWithoutPostDataInput!
  create: CarCreateWithoutPostInput!
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
  post: PostWhereInput
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
  type: Type
  type_not: Type
  type_in: [Type!]
  type_not_in: [Type!]
  steeringWheelOnTheRight: Boolean
  steeringWheelOnTheRight_not: Boolean
  color: Color
  color_not: Color
  color_in: [Color!]
  color_not_in: [Color!]
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
  fromCountry: Country
  fromCountry_not: Country
  fromCountry_in: [Country!]
  fromCountry_not_in: [Country!]
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

scalar DateTime

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
  ADD_POSTS
  ITEMUPDATE
  ITEMDELETE
}

type Post {
  id: ID!
  car: Car!
  user: User!
  price: Int!
  location: String!
  avatar: String
  photos: [String!]!
  description: String
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  car: CarCreateOneWithoutPostInput!
  user: UserCreateOneWithoutPostsInput!
  price: Int!
  location: String!
  avatar: String
  photos: PostCreatephotosInput
  description: String
}

input PostCreateManyWithoutUserInput {
  create: [PostCreateWithoutUserInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutCarInput {
  create: PostCreateWithoutCarInput
  connect: PostWhereUniqueInput
}

input PostCreatephotosInput {
  set: [String!]
}

input PostCreateWithoutCarInput {
  user: UserCreateOneWithoutPostsInput!
  price: Int!
  location: String!
  avatar: String
  photos: PostCreatephotosInput
  description: String
}

input PostCreateWithoutUserInput {
  car: CarCreateOneWithoutPostInput!
  price: Int!
  location: String!
  avatar: String
  photos: PostCreatephotosInput
  description: String
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
  location_ASC
  location_DESC
  avatar_ASC
  avatar_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  price: Int!
  location: String!
  avatar: String
  photos: [String!]!
  description: String
}

input PostScalarWhereInput {
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
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
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
  car: CarUpdateOneRequiredWithoutPostInput
  user: UserUpdateOneRequiredWithoutPostsInput
  price: Int
  location: String
  avatar: String
  photos: PostUpdatephotosInput
  description: String
}

input PostUpdateManyDataInput {
  price: Int
  location: String
  avatar: String
  photos: PostUpdatephotosInput
  description: String
}

input PostUpdateManyMutationInput {
  price: Int
  location: String
  avatar: String
  photos: PostUpdatephotosInput
  description: String
}

input PostUpdateManyWithoutUserInput {
  create: [PostCreateWithoutUserInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneRequiredWithoutCarInput {
  create: PostCreateWithoutCarInput
  update: PostUpdateWithoutCarDataInput
  upsert: PostUpsertWithoutCarInput
  connect: PostWhereUniqueInput
}

input PostUpdatephotosInput {
  set: [String!]
}

input PostUpdateWithoutCarDataInput {
  user: UserUpdateOneRequiredWithoutPostsInput
  price: Int
  location: String
  avatar: String
  photos: PostUpdatephotosInput
  description: String
}

input PostUpdateWithoutUserDataInput {
  car: CarUpdateOneRequiredWithoutPostInput
  price: Int
  location: String
  avatar: String
  photos: PostUpdatephotosInput
  description: String
}

input PostUpdateWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutUserDataInput!
}

input PostUpsertWithoutCarInput {
  update: PostUpdateWithoutCarDataInput!
  create: PostCreateWithoutCarInput!
}

input PostUpsertWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutUserDataInput!
  create: PostCreateWithoutUserInput!
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
  user: UserWhereInput
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
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

enum Type {
  SMALL
  URBAN
  COMPACT
  SEDAN
  ESTATE
  MINIVAN
  SUV
  CABRIO
  COUPE
}

type User {
  id: ID!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  name: String!
  email: String!
  emailConfirmed: Boolean
  emailConfirmationToken: String
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: [Permission!]!
  createdAt: DateTime!
  phoneNumber: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  posts: PostCreateManyWithoutUserInput
  name: String!
  email: String!
  emailConfirmed: Boolean
  emailConfirmationToken: String
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserCreatepermissionsInput
  phoneNumber: String
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

input UserCreateWithoutPostsInput {
  name: String!
  email: String!
  emailConfirmed: Boolean
  emailConfirmationToken: String
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserCreatepermissionsInput
  phoneNumber: String
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
  emailConfirmed_ASC
  emailConfirmed_DESC
  emailConfirmationToken_ASC
  emailConfirmationToken_DESC
  password_ASC
  password_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  createdAt_ASC
  createdAt_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  emailConfirmed: Boolean
  emailConfirmationToken: String
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: [Permission!]!
  createdAt: DateTime!
  phoneNumber: String
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
  posts: PostUpdateManyWithoutUserInput
  name: String
  email: String
  emailConfirmed: Boolean
  emailConfirmationToken: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
  phoneNumber: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  emailConfirmed: Boolean
  emailConfirmationToken: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
  phoneNumber: String
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpdateWithoutPostsDataInput {
  name: String
  email: String
  emailConfirmed: Boolean
  emailConfirmationToken: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
  phoneNumber: String
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
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
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
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
  emailConfirmed: Boolean
  emailConfirmed_not: Boolean
  emailConfirmationToken: String
  emailConfirmationToken_not: String
  emailConfirmationToken_in: [String!]
  emailConfirmationToken_not_in: [String!]
  emailConfirmationToken_lt: String
  emailConfirmationToken_lte: String
  emailConfirmationToken_gt: String
  emailConfirmationToken_gte: String
  emailConfirmationToken_contains: String
  emailConfirmationToken_not_contains: String
  emailConfirmationToken_starts_with: String
  emailConfirmationToken_not_starts_with: String
  emailConfirmationToken_ends_with: String
  emailConfirmationToken_not_ends_with: String
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
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
    