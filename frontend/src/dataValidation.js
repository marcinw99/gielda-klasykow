import passwordStrengthLevels from "../globalConfig/passwordStrengthLevels";

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
    case meetsRegexp({ value, regExps: passwordStrengthLevels.veryStrong }):
      return "veryStrong";
    case meetsRegexp({ value, regExps: passwordStrengthLevels.strong }):
      return "strong";
    default:
      return "average";
  }
}

export function updatePasswordStrength({ password, repeatedPassword }) {
  let passwordErrors = [];
  let passwordStrengthLevel = "weak";

  passwordStrengthLevels.average.map(item => {
    if (!item.regexp.test(password)) {
      passwordErrors.push(item.message);
    }
  });

  if (passwordErrors.length === 0) {
    // if password meets minimum requirements (average level) return strength level
    passwordStrengthLevel = getStrengthLevel(password);
  }

  if (password !== repeatedPassword) {
    passwordErrors.push("Podane hasła nie som identyczne.");
  }

  return { passwordErrors, passwordStrengthLevel };
}
