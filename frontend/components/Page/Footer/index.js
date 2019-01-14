import React from "react";
import { Typography, Button, Grid, SvgIcon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import SvgIcons from "../../../resources/SvgIcons";
import linkHrefs from "../../../resources/linkHrefs";

const styles = theme => ({
  root: {
    maxWidth: "1000px",
    margin: "600px auto 0 auto"
  },
  socialMediaGrid: {
    marginTop: "8px"
  },
  socialMediaButton: {
    margin: "12px"
  },
  simpleLink: {
    paddingLeft: "2px"
  },
  simpleLinkTypography: {
    color: theme.palette.primary.main,
    width: "100%"
  }
});

const SocialMediaLink = props => (
  <Button
    target="_blank"
    className={props.rootCss}
    variant="outlined"
    color="primary"
    href={props.href}
  >
    <SvgIcon>
      <path {...props.svgIcon} />
    </SvgIcon>{" "}
    {props.label}
  </Button>
);

const SimpleLink = props => (
  <Button className={props.rootCss} variant="text" href={props.href}>
    <Typography align="left" className={props.typographyCss}>
      {props.label}
    </Typography>
  </Button>
);

const Footer = props => (
  <Grid
    className={props.classes.root}
    justify="space-around"
    component="footer"
    container
  >
    <Grid item>
      <Typography variant="h6">ZNAJDŹ NAS NA:</Typography>
      <Grid
        className={props.classes.socialMediaGrid}
        container
        direction="column"
      >
        {[
          {
            href: linkHrefs.facebook,
            svgIcon: SvgIcons.facebook,
            label: "Facebook"
          },
          {
            href: linkHrefs.youtube,
            svgIcon: SvgIcons.youtube,
            label: "Youtube"
          },
          {
            href: linkHrefs.instagram,
            svgIcon: SvgIcons.instagram,
            label: "Instagram"
          }
        ].map((item, key) => (
          <SocialMediaLink
            key={`${item.label}${key}`}
            rootCss={props.classes.socialMediaButton}
            {...item}
          />
        ))}
      </Grid>
    </Grid>
    <Grid item>
      <Typography variant="h6">GIEŁDA ZABYTKÓW</Typography>
      <Grid container direction="column">
        {[
          { href: "#", label: "Pomoc" },
          { href: "#", label: "Kontakt" },
          { href: "#", label: "Reklama" },
          { href: "#", label: "Polityka prywatności" },
          { href: "#", label: "Regulamin plików Cookies" },
          { href: "#", label: "Regulamin Giełda Zabytków" }
        ].map(item => (
          <SimpleLink
            key={item.label}
            {...item}
            rootCss={props.classes.simpleLink}
            typographyCss={props.classes.simpleLinkTypography}
          />
        ))}
      </Grid>
    </Grid>
    <Grid item>
      <Typography variant="h6">USŁUGI I NARZĘDZIA</Typography>
      <Grid container direction="column">
        <SimpleLink
          href="#"
          label="Umowa kupna sprzedaży"
          rootCss={props.classes.simpleLink}
          typographyCss={props.classes.simpleLinkTypography}
        />
      </Grid>
    </Grid>
    <Grid item>
      <Typography variant="h6">PRZYDATNE INFORMACJE</Typography>
      <Grid container direction="column">
        {[
          { href: "#", label: "Magazyn Giełda Zabytków" },
          { href: "#", label: "Mapa kategorii" },
          { href: "#", label: "Kariera" }
        ].map(item => (
          <SimpleLink
            key={item.label}
            {...item}
            rootCss={props.classes.simpleLink}
            typographyCss={props.classes.simpleLinkTypography}
          />
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Footer);
