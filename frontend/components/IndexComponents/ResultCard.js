import React, { Fragment } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { spacesInNumbers } from "../../src/helpers";

const styles = theme => ({
  root: {
    minWidth: 300,
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

const CardTitle = props => (
  <Typography variant="h6">
    {props.brand} {props.model} {props.version || ""}
  </Typography>
);

const Price = props => (
  <Typography className={props.class} variant="h6" color="secondary">
    {spacesInNumbers(props.price)} PLN
  </Typography>
);

const ListItem = props =>
  props.value ? (
    <li>
      <Typography>
        {props.text ? props.text : props.value}
        {props.afterText}
      </Typography>
    </li>
  ) : null;

const ListItemMultiValues = props => (
  <li>
    <Typography>
      {props.items.map((item, key) => {
        return item.value ? (
          <Fragment key={`${item.value}${key}`}>
            {item.text ? item.text : item.value}
            {item.afterText}
          </Fragment>
        ) : null;
      })}
    </Typography>
  </li>
);

const ResultCard = props => (
  <Card className={props.classes.root}>
    <CardActionArea>
      <CardMedia
        className={props.classes.media}
        image={props.avatar || "/static/noImageAvailable.jpg"}
      />
      <CardContent>
        <CardTitle props={props.car} />
        <ul className={props.classes.listContainer}>
          <ListItemMultiValues
            items={[
              { value: `${props.car.fuelType}`, afterText: ", " },
              {
                value: `${props.car.engineSize}`,
                afterText: (
                  <Fragment>
                    cm<sup>3</sup>,{" "}
                  </Fragment>
                )
              },
              { value: `${props.car.power}`, afterText: "km, " },
              { value: `${props.car.torque}`, afterText: "nm, " }
            ]}
          />
          <ListItem
            value={props.car.productionYear}
            afterText=" rok produkcji"
          />
          <ListItem
            value={props.car.mileage}
            text={spacesInNumbers(props.car.mileage)}
            afterText=" kilometrów
                    przebiegu"
          />
        </ul>
        <Price class={props.classes.price} price={props.price} />
      </CardContent>
    </CardActionArea>
  </Card>
);

export default withStyles(styles)(ResultCard);
