import React from "react";
import { Grid, Typography, SvgIcon } from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";

import SvgIcons from "../../../../resources/SvgIcons";
import enumsDisplayedText from "../../../../resources/enumsDisplayedText";
import { spacesInNumbers } from "./helpers";

export const CardTitle = ({
  car: { brand, model, version, productionYear }
}) => (
  <Grid container justify="space-between">
    <Typography variant="h6">
      {enumsDisplayedText("brand", brand)} {model} {version}
    </Typography>
    <div style={{ minWidth: "20px" }} />
    <Typography variant="h6" color="secondary">
      {productionYear}
    </Typography>
  </Grid>
);

export const FuelType = ({ classes, value }) => (
  <Grid className={classes.detail} container alignItems="center">
    <SvgIcon color="secondary">
      <path {...SvgIcons.gas} />
    </SvgIcon>
    <Typography className={classes.bold}>
      {enumsDisplayedText("fuelType", value)}
    </Typography>
  </Grid>
);

export const Engine = ({ classes, engineSize, power }) => (
  <Grid className={classes.detail} container alignItems="center" spacing={8}>
    <Grid item style={{ paddingLeft: 0 }}>
      <SvgIcon color="secondary">
        <path {...SvgIcons.engine} />
      </SvgIcon>
    </Grid>
    <Grid item>
      <Typography className={classes.bold}>
        {engineSize} cm<sup>3</sup>, {power} km
      </Typography>
    </Grid>
  </Grid>
);

export const Mileage = ({ classes, value }) => (
  <Typography className={`${classes.bold} ${classes.detail}`}>
    <Typography
      component="span"
      inline
      color="secondary"
      className={classes.bold}
    >
      {spacesInNumbers(value)}
    </Typography>{" "}
    kilometrów przebiegu
  </Typography>
);

export const Price = ({ price, rootCss }) => (
  <Typography className={rootCss} variant="h6" color="secondary">
    {spacesInNumbers(price)} PLN
  </Typography>
);

export const Location = ({ location, rootCss }) => (
  <Typography className={rootCss} variant="h6">
    <LocationOn color="secondary" /> {location}
  </Typography>
);
