const postsFieldsValidationRules = {
  default: {
    maxLength: 50
  },
  // overrides
  price: {
    maxLength: 50,
    minValue: 50,
    maxValue: 10000000
  },
  productionYear: {
    maxLength: 4,
    minLength: 4,
    minValue: 1800,
    maxValue: 2018
  },
  photos: {
    maxLength: 50,
    maxItemLength: 250
  },
  avatar: {
    maxLength: 250
  },
  description: {
    maxLength: 2000
  }
};

module.exports = postsFieldsValidationRules;
