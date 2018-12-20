import React, { Fragment } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import enumsDisplayedText from "../../resources/enumsDisplayedText";
import { spacesInNumbers } from "../../src/helpers";

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

const CardTitle = props => (
  <Typography variant="h6">
    {enumsDisplayedText("Car", "brand", props.brand)} {props.model}{" "}
    {props.version || ""}
  </Typography>
);

const Price = props =>
  props.price == null ? null : (
    <Typography className={props.class} variant="h6" color="secondary">
      {spacesInNumbers(props.price)} PLN
    </Typography>
  );

const ListItem = props =>
  props.value == null ? null : (
    <li>
      <Typography>
        {props.text ? props.text(props.value) : props.value}
        {props.afterText}
      </Typography>
    </li>
  );

const ListItemMultiValues = props => (
  <li>
    <Typography>
      {props.items.map((item, key) => {
        return item.value == null ? null : (
          <Fragment key={`${item.value}${key}`}>
            {item.text ? item.text : item.value}
            {item.afterText}
          </Fragment>
        );
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
        <CardTitle
          brand={props.car.brand}
          model={props.car.model}
          version={props.car.version}
        />
        <ul className={props.classes.listContainer}>
          <ListItemMultiValues
            items={[
              {
                value: props.car.fuelType,
                text: enumsDisplayedText("Car", "fuelType", props.car.fuelType),
                afterText: ", "
              },
              {
                value: props.car.engineSize,
                afterText: (
                  <Fragment>
                    cm<sup>3</sup>,{" "}
                  </Fragment>
                )
              },
              { value: props.car.power, afterText: "km, " },
              { value: props.car.torque, afterText: "nm, " }
            ]}
          />
          <ListItem
            value={props.car.productionYear}
            afterText=" rok produkcji"
          />
          <ListItem
            value={props.car.mileage}
            text={value => spacesInNumbers(value)}
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
