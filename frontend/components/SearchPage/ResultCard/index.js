import React, { Fragment } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import enumsDisplayedText from "../../../resources/enumsDisplayedText";
import { spacesInNumbers } from "../../../src/helpers";
import Price from "./Price";
import CardTitle from "./CardTitle";
import ListItem from "./ListItem";
import ListItemMultiValues from "./ListItemMultiValues";

const styles = theme => ({
  root: {
    width: 300,
    margin: theme.spacing.unit * 1
  },
  media: {
    height: 280
  },
  listContainer: {
    paddingLeft: theme.spacing.unit
  },
  price: {
    textAlign: "right"
  }
});

const ResultCard = ({ classes, car, price, avatar }) => (
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia className={classes.media} image={avatar} />
      <CardContent>
        <CardTitle brand={car.brand} model={car.model} version={car.version} />
        <ul className={classes.listContainer}>
          <ListItemMultiValues
            items={[
              {
                value: car.fuelType,
                text: enumsDisplayedText("Car", "fuelType", car.fuelType),
                afterText: ", "
              },
              {
                value: car.engineSize,
                afterText: (
                  <Fragment>
                    cm<sup>3</sup>,{" "}
                  </Fragment>
                )
              },
              { value: car.power, afterText: "km, " },
              { value: car.torque, afterText: "nm, " }
            ]}
          />
          <ListItem value={car.productionYear} afterText=" rok produkcji" />
          <ListItem
            value={car.mileage}
            text={value => spacesInNumbers(value)}
            afterText=" kilometrów
                    przebiegu"
          />
        </ul>
        <Price rootCss={classes.price} price={price} />
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
