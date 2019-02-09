import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import {
  CardTitle,
  FuelType,
  Engine,
  Mileage,
  Price,
  Location
} from "./components";

const styles = theme => ({
  root: {
    minWidth: 300,
    margin: theme.spacing.unit * 1,
    borderRadius: 0
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
          <FuelType classes={classes} value={car.fuelType} />
          {car.engineSize && car.power && (
            <Engine
              classes={classes}
              engineSize={car.engineSize}
              power={car.power}
            />
          )}
          {car.mileage && <Mileage classes={classes} value={car.mileage} />}
        </div>
        <Grid container justify="space-between">
          <Location rootCss={classes.bold} location={"Gdańsk"} />
          <Price rootCss={classes.bold} price={price} />
        </Grid>
      </CardContent>
    </CardActionArea>
  </Card>
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
