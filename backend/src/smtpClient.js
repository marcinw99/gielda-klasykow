import nodemailer from "nodemailer";

require("dotenv").config({ path: "variables.env" });

export default nodemailer.createTransport({
  host: "smtp.emaillabs.net.pl",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_CLIENT_USER,
    pass: process.env.SMTP_CLIENT_PASS
  }
});

export const getMessage = ({ to, variant, data }) => ({
  from: '"Giełda klasyków" <konto@gieldaklasykow.pl>',
  to,
  ...getEmailTemplate({ variant, data })
});

/*
data arguments for:
newUser: name, confirmationLink
resetPassword: name, resetPasswordLink
*/

const getEmailTemplate = ({ variant, data }) => {
  switch (variant) {
    case "newUser":
      return {
        subject: "Potwierdzenie adresu email - Giełda klasyków",
        text: `Witaj ${data.name},
        Twoje konto zostało utworzone poprawnie, aby potwierdzić email otwórz poniższy adres strony.
        ${data.confirmationLink}`,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Potwierdzenie adresu email - Giełda klasyków</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>

        <body style="margin: 0; padding: 0;">
            <h4>Witaj ${data.name},</h4>
            <p>Twoje konto zostało utworzone poprawnie, aby potwierdzić email kliknij w poniższy przycisk.</p>
            <a href=${
              data.confirmationLink
            }><button>Potwierdź email</button></a>
            <p>Jeśli powyższy przycisk nie działa, skopiuj poniższy link i wklej w adres strony.</p>
            <p>${data.confirmationLink}</p> </body> </html>`
      };
    case "resetPassword":
      return {
        subject: "Resetowanie hasła - Giełda klasyków",
        text: `Witaj ${data.name},
        Poprosiłeś o zresetowanie hasła do konta, otwórz poniższy link i ustaw nowe hasło.
        ${data.resetPasswordLink}`,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Resetowanie hasła - Giełda klasyków</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>

        <body style="margin: 0; padding: 0;">
            <h4>Witaj ${data.name},</h4>
            <p>Poprosiłeś o zresetowanie hasła do konta, kliknij w poniższy przycisk i ustaw nowe hasło.</p>
            <a href=${
              data.resetPasswordLink
            }><button>Potwierdź email</button></a>
            <p>Jeśli powyższy przycisk nie działa, skopiuj poniższy link i wklej w adres strony.</p>
            <p>${data.resetPasswordLink}</p> </body> </html>`
      };
    default:
      return " ";
  }
};
