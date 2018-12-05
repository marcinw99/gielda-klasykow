import React, { Component } from "react";

import SvgIcons from "../resources/SvgIcons";
import linkHrefs from "../resources/linkHrefs";

import { Typography, Button, Grid } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  socialMediaButton: {
    background: "grey",
    margin: "5px"
  }
});

const RoundIcon = props => {
  return (
    <SvgIcon className={props.svgClass}>
      <path {...props.pathProps} />
    </SvgIcon>
  );
};

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid component="footer" container spacing={16}>
        <Grid item>
          <Typography variant="h5">Znajdź nas na:</Typography>
          <IconButton
            className={classes.socialMediaButton}
            href={linkHrefs.facebook}
          >
            <RoundIcon pathProps={SvgIcons.facebook} />
          </IconButton>
          <IconButton
            className={classes.socialMediaButton}
            href={linkHrefs.youtube}
          >
            <RoundIcon pathProps={SvgIcons.youtube} />
          </IconButton>
          <IconButton
            className={classes.socialMediaButton}
            href={linkHrefs.instagram}
          >
            <RoundIcon pathProps={SvgIcons.instagram} />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Footer);
