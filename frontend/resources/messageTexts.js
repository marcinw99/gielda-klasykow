const messageTexts = {
  600: () => "Ilość znaków w argumentach jest nieprawidłowa",
  601: () => "Podane hasło nie spełnia minimalnych wymagań złożoności.",
  602: () => "Podane hasła nie są identyczne.",
  603: args => `Nie znaleziono użytkownika z emailem ${args[0]}`,
  604: () => "Podane hasło jest nieprawidłowe",
  605: () => "Ten link do resetowania hasła wygasł lub jest nieprawidłowy.",

  700: () => "User signed out successfully.",
  701: () => "Link do resetowania hasła został wysłany na podany adres email.",
  702: () => "Reset token is valid."
};

export default messageTexts;
