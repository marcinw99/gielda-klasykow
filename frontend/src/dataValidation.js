// Password strength level

// weak - can't submit
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

function meetsRegexp({ value, regExps }) {
  for (const index in regExps) {
    if (regExps[index].regexp.test(value) === false) {
      return false;
    }
  }
  return true;
}

function getStrengthLevel(value) {
  switch (true) {
    case meetsRegexp({ value, regExps: veryStrongRegExpressions }):
      return "veryStrong";
    case meetsRegexp({ value, regExps: strongRegExpressions }):
      return "strong";
    default:
      return "average";
  }
}

export function updatePasswordStrength({ password, passwordRepeat }) {
  let passwordErrors = [];
  let passwordStrengthLevel = "weak";

  averageRegExpressions.map(item => {
    if (!item.regexp.test(password)) {
      passwordErrors.push(item.message);
    }
  });

  if (passwordErrors.length === 0) {
    // if password meets minimum requirements (average level) return strength level
    passwordStrengthLevel = getStrengthLevel(password);
  }

  if (password !== passwordRepeat) {
    passwordErrors.push("Podane hasła nie som identyczne.");
  }

  return { passwordErrors, passwordStrengthLevel };
}
