// Password strength level

// below average - can't submit
// average - 6 chars, min 1 number, min 1 letter
// strong - average with 8 chars and min 1 special character
// veryStrong - 16 chars

const regExpressions = {
  min6Chars: {
    regexp: new RegExp(".{6,}"),
    message: "Hasło nie zawiera minimum 6 znaków."
  },
  min1Number: {
    regexp: new RegExp("\\d"),
    message: "Hasło nie zawiera minimum jednej cyfry."
  },
  min1Letter: {
    regexp: new RegExp("[a-z]", "i"),
    message: "Hasło nie zawiera minimum jednej litery."
  },
  min8Chars: {
    regexp: new RegExp(".{8,}")
  },
  min1SpecialChar: {
    regexp: /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
  },
  min16Chars: {
    regexp: new RegExp(".{16,}")
  }
};

const averageRegExpressions = [
  regExpressions.min6Chars,
  regExpressions.min1Number,
  regExpressions.min1Letter
];

const strongRegExpressions = [
  regExpressions.min8Chars,
  regExpressions.min1SpecialChar
];

const veryStrongRegExpressions = [regExpressions.min16Chars];

const passwordStrengthLevels = {
  average: averageRegExpressions,
  strong: strongRegExpressions,
  veryStrong: veryStrongRegExpressions
};

module.exports = passwordStrengthLevels;
