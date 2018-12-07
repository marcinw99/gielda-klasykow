import React, { Component } from "react";

import SvgIcons from "../resources/SvgIcons";
import linkHrefs from "../resources/linkHrefs";

import { Typography, Button, Grid, SvgIcon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
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
    color: theme.palette.primary.light,
    width: "100%"
  }
});

const SocialMediaLink = props => (
  <Button
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

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid justify="center" component="footer" container spacing={32}>
        <Grid item>
          <Typography variant="title">ZNAJDŹ NAS NA:</Typography>
          <Grid
            className={classes.socialMediaGrid}
            container
            direction="column"
            spacing={40}
          >
            <SocialMediaLink
              rootCss={classes.socialMediaButton}
              href={linkHrefs.facebook}
              svgIcon={SvgIcons.facebook}
              label="Facebook"
            />
            <SocialMediaLink
              rootCss={classes.socialMediaButton}
              href={linkHrefs.youtube}
              svgIcon={SvgIcons.youtube}
              label="Youtube"
            />
            <SocialMediaLink
              rootCss={classes.socialMediaButton}
              href={linkHrefs.instagram}
              svgIcon={SvgIcons.instagram}
              label="Instagram"
            />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="title">GIEŁDA ZABYTKÓW</Typography>
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
                rootCss={classes.simpleLink}
                typographyCss={classes.simpleLinkTypography}
              />
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="title">USŁUGI I NARZĘDZIA</Typography>
          <Grid container direction="column">
            {[{ href: "#", label: "Umowa kupna sprzedaży" }].map(item => (
              <SimpleLink
                key={item.label}
                {...item}
                rootCss={classes.simpleLink}
                typographyCss={classes.simpleLinkTypography}
              />
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="title">PRZYDATNE INFORMACJE</Typography>
          <Grid container direction="column">
            {[
              { href: "#", label: "Magazyn Giełda Zabytków" },
              { href: "#", label: "Mapa kategorii" },
              { href: "#", label: "Kariera" }
            ].map(item => (
              <SimpleLink
                key={item.label}
                {...item}
                rootCss={classes.simpleLink}
                typographyCss={classes.simpleLinkTypography}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Footer);
