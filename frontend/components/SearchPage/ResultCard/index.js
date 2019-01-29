import React, { Fragment } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  SvgIcon
} from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import SvgIcons from "../../../resources/SvgIcons";
import enumsDisplayedText from "../../../resources/enumsDisplayedText";
import { spacesInNumbers } from "./helpers";

const styles = theme => ({
  root: {
    minWidth: 300,
    margin: theme.spacing.unit * 1
  },
  media: {
    height: 280
  },
  details: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`
  },
  detail: {
    margin: `${theme.spacing.unit * 0.5}px 0`
  },
  bold: {
    fontWeight: 500
  }
});

const ResultCard = ({ classes, car, price, avatar }) => (
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia className={classes.media} image={avatar} />
      <CardContent>
        <CardTitle car={car} />
        <div className={classes.details}>
          <Grid className={classes.detail} container alignItems="center">
            <SvgIcon color="secondary">
              <path {...SvgIcons.gas} />
            </SvgIcon>
            <Typography className={classes.bold}>
              {enumsDisplayedText("Car", "fuelType", car.fuelType)}
            </Typography>
          </Grid>
          <Grid
            className={classes.detail}
            container
            alignItems="center"
            spacing={8}
          >
            <Grid item style={{ paddingLeft: 0 }}>
              <SvgIcon color="secondary">
                <path {...SvgIcons.engine} />
              </SvgIcon>
            </Grid>
            <Grid item>
              <Typography className={classes.bold}>
                {car.engineSize} cm<sup>3</sup>, {car.power} km
              </Typography>
            </Grid>
          </Grid>
          <Typography className={`${classes.bold} ${classes.detail}`}>
            <Typography
              component="span"
              inline
              color="secondary"
              className={classes.bold}
            >
              {spacesInNumbers(car.mileage)}
            </Typography>{" "}
            kilometrów przebiegu
          </Typography>
        </div>
        <Grid container justify="space-between">
          <Location rootCss={classes.bold} location={"Gdańsk"} />
          <Price rootCss={classes.bold} price={price} />
        </Grid>
      </CardContent>
    </CardActionArea>
  </Card>
);

const Price = ({ price, rootCss }) => (
  <Typography className={rootCss} variant="h6" color="secondary">
    {spacesInNumbers(price)} PLN
  </Typography>
);

const Location = ({ location, rootCss }) => (
  <Typography className={rootCss} variant="h6">
    <LocationOn color="secondary" /> {location}
  </Typography>
);

const CardTitle = ({ car: { brand, model, version, productionYear } }) => (
  <Grid container justify="space-between">
    <Typography variant="h6">
      {enumsDisplayedText("Car", "brand", brand)} {model} {version}
    </Typography>
    <div style={{ minWidth: "20px" }} />
    <Typography variant="h6" color="secondary">
      {productionYear}
    </Typography>
  </Grid>
);

ResultCard.propTypes = {
  car: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  avatar: PropTypes.string
};

ResultCard.defaultProps = {
  avatar: "/static/noImageAvailable.jpg"
};

export default withStyles(styles)(ResultCard);
