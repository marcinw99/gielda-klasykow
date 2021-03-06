import React from "react";
import { Typography, Grid, withWidth, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import Router from "next/router";

import { socialMedia, mainLinks, tools, additionalInfo } from "./resources";
import SocialMediaLink from "./SocialMediaLink";
import SimpleLink from "./SimpleLink";

const styles = theme => ({
  root: {
    width: "100%"
  },
  marginForDrawer: {
    marginLeft: theme.custom.drawerWidth
  },
  gridChild: {
    padding: theme.spacing.unit * 2
  },
  socialMediaButton: {
    color: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
    margin: theme.spacing.unit * 1.5
  },
  simpleLink: {
    paddingLeft: theme.spacing.unit * 0.2
  },
  simpleLinkTypography: {
    color: theme.palette.primary.dark,
    width: "100%"
  }
});

const Footer = ({ classes, width }) => {
  const isSearchPageDrawerActive =
    Router.pathname === "/gielda" && width !== "xs" && width !== "sm";
  return (
    <div className={isSearchPageDrawerActive ? classes.marginForDrawer : null}>
      <Grid
        container
        className={classes.root}
        justify="center"
        component="footer"
      >
        <div className={classes.gridChild}>
          <Typography variant="h6">ZNAJDŹ NAS NA:</Typography>
          <Grid container direction="column">
            {socialMedia.map((item, key) => (
              <SocialMediaLink
                key={`${item.label}${key}`}
                rootCss={classes.socialMediaButton}
                {...item}
              />
            ))}
          </Grid>
        </div>
        <div className={classes.gridChild}>
          <Typography variant="h6">GIEŁDA ZABYTKÓW</Typography>
          <Grid container direction="column">
            {mainLinks.map(item => (
              <SimpleLink
                key={item.label}
                {...item}
                rootCss={classes.simpleLink}
                typographyCss={classes.simpleLinkTypography}
              />
            ))}
          </Grid>
        </div>
        <div className={classes.gridChild}>
          <Typography variant="h6">USŁUGI I NARZĘDZIA</Typography>
          <Grid container direction="column">
            {tools.map(item => (
              <SimpleLink
                key={item.label}
                href={item.href}
                label={item.label}
                rootCss={classes.simpleLink}
                typographyCss={classes.simpleLinkTypography}
              />
            ))}
          </Grid>
        </div>
        <div className={classes.gridChild}>
          <Typography variant="h6">PRZYDATNE INFORMACJE</Typography>
          <Grid container direction="column">
            {additionalInfo.map(item => (
              <SimpleLink
                key={item.label}
                {...item}
                rootCss={classes.simpleLink}
                typographyCss={classes.simpleLinkTypography}
              />
            ))}
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default compose(
  withWidth(),
  withStyles(styles)
)(Footer);
