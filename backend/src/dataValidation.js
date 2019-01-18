const minimumRequirementsRegExpressions = [
  {
    regexp: new RegExp(".{6,}")
    // message: "Hasło nie zawiera minimum 6 znaków."
  },
  {
    regexp: new RegExp("\\d")
    // message: "Hasło nie zawiera minimum jednej cyfry."
  },
  {
    regexp: new RegExp("[a-z]", "i")
    // message: "Hasło nie zawiera minimum jednej litery."
  }
];

export function isPasswordValid(password) {
  for (const index in minimumRequirementsRegExpressions) {
    if (
      minimumRequirementsRegExpressions[index].regexp.test(password) === false
    ) {
      return false;
    }
  }
  return true;
}

export function areArgumentsLengthsInRange(args) {
  for (const index in args) {
    if (args[index] > 30) {
      return false;
    }
  }
  return true;
}
