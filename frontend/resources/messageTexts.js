const messageTexts = {
  600: () => "Ilość znaków w argumentach jest nieprawidłowa",
  601: () => "Podane hasło nie spełnia minimalnych wymagań złożoności.",
  602: () => "Podane hasła nie są identyczne.",
  603: args => `Nie znaleziono użytkownika z emailem ${args[0]}`,
  604: () => "Podane hasło jest nieprawidłowe",
  605: () => "Ten link wygasł lub jest nieprawidłowy.",
  606: () => "Argumenty mają nieprawidłową ilość znaków.",
  607: () => "Argumenty są nieprawidłowe.",
  608: () => "Użytkownik nie jest zalogowany.",
  609: () => "Wystąpił problem z wysłaniem e-maila.",
  610: () => "Ten e-mail został już potwierdzony.",
  611: () =>
    "Token potwierdzenia e-mail jest nieprawidłowy, lub e-mail został już potwierdzony.",

  700: () => "User signed out successfully.",
  701: () => "Link do resetowania hasła został wysłany na podany adres email.",
  702: () => "Token resetowania jest prawidłowy.",
  703: () => "Email został potwierdzony, witamy na Giełdzie Klasyków."
};

export default messageTexts;
